import React from 'react'

export interface MinecraftBedrockServerStatus {
  id: string
  name: string
  host: string
  port: number
  ok: boolean
  timestamp: string
}

const useMinecraftBedrockServerStatusList = () => {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [minecraftBedrockServerStatusList, setMinecraftBedrockServerStatusList] = React.useState<MinecraftBedrockServerStatus[] | null>(null)

  React.useEffect(() => {
    if (minecraftBedrockServerStatusList === null) {
      fetch('https://mcstatus-bff.aoirint.com/bedrock_servers')
        .then((data) => data.json())
        .then((bedrockServerStatusList: MinecraftBedrockServerStatus[]) => {
          setMinecraftBedrockServerStatusList(bedrockServerStatusList)
          setLoading(false)
        })
        .catch((error: unknown) => {
          console.error(error)
        })
    }
  }, [minecraftBedrockServerStatusList])

  return {
    loading,
    bedrockServerStatusList: minecraftBedrockServerStatusList,
  }
}

export default useMinecraftBedrockServerStatusList
