import { useDispatch } from "react-redux";
import { handleLayersHighlights } from '../../store/slices/areasMap/index'

export const useLayers = () => {
  const dispatch = useDispatch();

  const setLayersHighlights = (areas: []) => {
    return dispatch(handleLayersHighlights(areas))
  }

  return {
    setLayersHighlights,
  }
}