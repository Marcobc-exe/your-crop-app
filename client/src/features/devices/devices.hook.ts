import {useQuery} from '@tanstack/react-query'
import { getAllDevices } from '../../api/devices.api'

export function useAllDevices() {
  return useQuery({
    queryKey: ['devices'],
    queryFn: () => getAllDevices(),
    staleTime: 30_000,
  })
}