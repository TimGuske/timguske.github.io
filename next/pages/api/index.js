import {pullover} from '../../data/artikel'

export default function handler(req, res) {
  res.status(200).json(pullover)
}
