/**
 * Calculation of conversion rate
 * @param t
 * @returns {number}
 */
export function cr(t) {
    return t.conversions / t.hits;
}

/**
 * Calculation of score
 * @param c
 * @param t
 */
export function calcZScore(c, t) {
    var z = cr(t) - cr(c);
    var s = (cr(t) * (1 - cr(t))) / t.hits + (cr(c) * (1 - cr(c))) / c.hits;
    return z/Math.sqrt(s);
}

/**
 * Calculate the Cumulative Normal Distribtion
 *
 * @param x
 * @returns {number}
 */
export function cumNorDist(x) {
    var b1 = 0.319381530;
    var b2 = -0.356563782;
    var b3 = 1.781477937;
    var b4 = -1.821255978;
    var b5 = 1.330274429;
    var p = 0.2316419;
    var c = 0.39894228;

    if (x >= 0.0) {
        let t = 1.0 / ( 1.0 + p * x );
        return (1.0 - c * Math.exp(-x * x / 2.0) * t *
        ( t * ( t * ( t * ( t * b5 + b4 ) + b3 ) + b2 ) + b1 ));
    } else {
        let t = 1.0 / ( 1.0 - p * x );
        return ( c * Math.exp(-x * x / 2.0) * t *
        ( t * ( t * ( t * ( t * b5 + b4 ) + b3 ) + b2 ) + b1 ));
    }
}

/**
 * Given a conversion rate, calculate a recommended sample
 * size
 * E.g: 0.25 worst, 0.15, 0.05 best at a 95% confidence
 * @param conv
 * @returns {Array}
 */
export function sampleSize(conv) {
    var a = 3.84145882689;
    var res = [];
    var bs = [0.0625, 0.0225, 0.0025];
    var len = bs.length;
    for (var i = 0; i < len; i++) {
        res.push(((1 - conv) * a / (bs[i] * conv)));
    }
    return res;
}
