import { useIncrementOneEmoteMutation } from '../generated'

type useGenericHook<T> = () => (payload: T) => void

export const useUpdateEmoteCount: useGenericHook<any> = () => {
  const [incrementEmoteUsageCount] = useIncrementOneEmoteMutation()
  return (data: any) => {
    return incrementEmoteUsageCount({
      variables: { name: data.name, gif: data.gif },
    }).catch((e) => e)
  }
}
