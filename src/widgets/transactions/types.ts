export interface Transaction {
  caller: string
  timestamp: number
  tx: string
  userAddress: {
    id: string
  }
  valueUSD: string
  id: string
}
