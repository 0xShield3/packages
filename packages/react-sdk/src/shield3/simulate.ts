import type { Transaction, JsonRpcProvider } from 'ethers'
import type { Address } from '../types'

declare enum PolicyDecision {
    ALLOW = 'Allow',
    DENY = 'Deny',
}
export interface IPolicyStatementResult {
    policy_id: string
    invoked: boolean
    annotations: {
        [key: string]: string
    }
}
export interface IPolicyEnginePolicyResponse {
    reasons: IPolicyStatementResult[]
    decision: PolicyDecision
    errors: string[]
}
export enum RoutingDecision {
    BLOCK = 'Block',
    MFA = 'MFA',
    NOTIFY = 'Notify',
    ALLOW = 'Allow',
    ERROR = 'Error',
}

export type PolicyResult = {
    policyId: string
    name: string
    result: IPolicyEnginePolicyResponse
    policyDecision: RoutingDecision
}

export interface SimulateResponse {
    decision: RoutingDecision
    transaction?: {
        workflow_results: {
            policyResults: PolicyResult[]
            routingDecision: RoutingDecision
        }
    }
    message?:string
}

export async function simulate(provider: JsonRpcProvider, transaction: Transaction, from: Address): Promise<SimulateResponse> {
    console.log(`Simulating transaction: ${JSON.stringify(transaction, null, 2)} from : ${from}`)
    const serializedTx = transaction.unsignedSerialized

    console.log(`serializedTx: ${serializedTx}`)
    const params = [serializedTx, from]

    const rpcResponse = await provider.send('eth_simulateTransaction', params)
    console.log(rpcResponse)
    return rpcResponse
}
