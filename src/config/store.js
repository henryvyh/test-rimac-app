export class StorageApp {
  static getData(key) {
    let localData = localStorage.getItem("app_storage")
    let dataJson = JSON.parse(localData)
    if (key && dataJson) return dataJson[key]
    return dataJson
  }
  static setItem(keyVal) {
    let data = localStorage.getItem("app_storage")
    localStorage.setItem(
      "app_storage",
      JSON.stringify({ ...JSON.parse(data), ...keyVal })
    )
  }
  //
  static clear = () => {
    localStorage.clear()
  }
  //
  static getUser = () => StorageApp.getData("user") ?? {}
  static getCart = () => StorageApp.getData("cart") ?? []
}
