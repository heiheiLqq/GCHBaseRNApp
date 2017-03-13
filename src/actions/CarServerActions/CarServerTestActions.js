/**
 * Created by zzh on 2017/3/8.
 */
import Type from '../../publics/actionsType'

export function carServerRdeuxTest(test) {

    return {
        type: Type.CAR_SERVER_TEST,
        test: test
    }
}