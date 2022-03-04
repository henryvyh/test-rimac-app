import { toast } from "react-toastify"
import { axiosChallenge } from "../../config/axios"
import { STORE_TYPE } from "./StoreTypes"

export const authUserAction = async (obj, dispatch, callback) => {
  return await axiosChallenge({
    url: `users/${obj.document}`,
    method: "get",
  })
    .then(async (data) => {
      const _data = data?.data
      let _veh = _data?.vehicle?.length ? _data?.vehicle[0] : {}
      let isValid = _data?.id === obj.document && _veh.placa === obj.placa
      if (!isValid)
        return toast.error(
          `Los datos son incorrectos para este usuario ${obj?.document}.`
        )
      toast.success(`Bienvenido ${_data?.name} ${_data?.lastname}`)
      await dispatch({
        type: STORE_TYPE.SET_USER,
        payload: _data,
      })
      return callback?.(_data)
    })
    .catch((e) => {
      toast.error(
        `Lo sentimos no hay registros para el usuario ${obj?.document}.`
      )
      return null
    })
}

export const addProductCart = async (dispatch, obj) => {
  await dispatch({ type: STORE_TYPE.ADD_COVERAGE, payload: obj })
  return toast.success(`Se agregó "${obj?.title}"`)
}
export const removeProductCart = async (dispatch, obj) => {
  await dispatch({ type: STORE_TYPE.REMOVE_COVERAGE, payload: obj })
  return toast.error(`Se quitó "${obj?.title}"`)
}
