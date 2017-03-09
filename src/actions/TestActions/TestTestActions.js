/**
 * Created by zzh on 2017/3/8.
 */

export function testRdeuxTest(test) {

    return {
        type: 'TEST_TEST',
        test: test
    }
}

export function downLoadData(array) {

    return {
        type: 'DATA_ARRAY',
        array: array
    }
}