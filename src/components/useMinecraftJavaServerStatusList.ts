import React from 'react'

export interface MinecraftJavaServerStatus {
  id: string
  name: string
  host: string
  port: number
  ok: boolean
  timestamp: string
}

const useMinecraftJavaServerStatusList = () => {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [minecraftJavaServerStatusList, setMinecraftJavaServerStatusList] = React.useState<MinecraftJavaServerStatus[]>(null)

  React.useEffect(() => {
    if (minecraftJavaServerStatusList === null) {
      fetch('https://mcstatus-bff.aoirint.com/java_servers')
        .then((data) => data.json())
        .then((javaServerStatusList: MinecraftJavaServerStatus[]) => {
          setMinecraftJavaServerStatusList(javaServerStatusList)
          setLoading(false)
        })
        .catch((error: unknown) => {
          console.error(error)
        })
    }
  })

  return {
    loading,
    javaServerStatusList: minecraftJavaServerStatusList,
  }
}

export default useMinecraftJavaServerStatusList
