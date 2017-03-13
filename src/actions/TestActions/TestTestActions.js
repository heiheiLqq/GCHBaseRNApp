/**
 * Created by zzh on 2017/3/8.
 */
import Type from '../../publics/actionsType'

export function testRdeuxTest(test) {

    return {
        type: Type.TEST_TEST,
        test: test
    }
}

export function downLoadData(array) {

    return {
        type: Type.DATA_ARRAY,
        array: array
    }
}