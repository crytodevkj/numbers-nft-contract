use anchor_lang::prelude::*;

#[repr(C)]
#[derive(AnchorDeserialize, AnchorSerialize, PartialEq, Debug, Clone)]
pub struct Creator {
    pub address: Pubkey,
    pub verified: bool,
    pub share: u8,
}

#[account]
#[derive(Default)]
pub struct CandyMachine {
    pub authority1: Pubkey,
    pub authority2: Pubkey,
    pub bump: u8,
    pub data: CandyMachineData,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Default, PartialEq)]
pub struct CandyMachineData {
    pub price: u64,
    pub nfts_minted: u64,
    pub go_live_date: Option<i64>,
    pub creators: Vec<Creator>,
    pub symbol: String,
    pub seller_fee_basis_points: u16,
    pub max_supply: Option<u64>,
    pub token_uris: Vec<String>
}

#[account]
#[derive(Default)]
pub struct MintPda {
    pub owner: Pubkey,
    pub mint_cnt: u8
}

/* seeds of the PDA, can be anything you want */
/* remember to change them on the JS too (utils.ts file) */
pub static PREFIX: &str = "number";
