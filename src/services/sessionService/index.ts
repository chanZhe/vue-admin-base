export const RedisStorage = {
  getter(name: string) {
    const data = sessionStorage.getItem(name)
    return data ? JSON.parse(data) : ''
  },
  setter(name: string, payload: any) {
    sessionStorage.setItem(name, JSON.stringify(payload));
  }
};
