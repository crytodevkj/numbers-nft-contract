export type MinimalMint = {
  "version": "0.0.1",
  "name": "minimal_mint",
  "instructions": [
    {
      "name": "createNftPool",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "mintNft",
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority2",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mintPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initializeCandyMachine",
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority1",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority2",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "data",
          "type": {
            "defined": "CandyMachineData"
          }
        }
      ]
    },
    {
      "name": "updateCandyMachine",
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority1",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "authority2",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "price",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "goLiveDate",
          "type": {
            "option": "i64"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "CandyMachine",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority1",
            "type": "publicKey"
          },
          {
            "name": "authority2",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "data",
            "type": {
              "defined": "CandyMachineData"
            }
          }
        ]
      }
    },
    {
      "name": "MintPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "mintCnt",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Creator",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "address",
            "type": "publicKey"
          },
          {
            "name": "verified",
            "type": "bool"
          },
          {
            "name": "share",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "CandyMachineData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "nftsMinted",
            "type": "u64"
          },
          {
            "name": "goLiveDate",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "creators",
            "type": {
              "vec": {
                "defined": "Creator"
              }
            }
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "sellerFeeBasisPoints",
            "type": "u16"
          },
          {
            "name": "maxSupply",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "tokenUris",
            "type": {
              "vec": "string"
            }
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "NotEnoughSOL",
      "msg": "You don't have enough SOL to mint this NFT"
    },
    {
      "code": 6001,
      "name": "CandyMachineNotLiveYet",
      "msg": "The launch date has not come yet"
    },
    {
      "code": 6002,
      "name": "CandyMachineEmpty",
      "msg": "There are no more NFTs to mint in this collection"
    },
    {
      "code": 6003,
      "name": "AlreadyMintedNFT",
      "msg": "You have already minted NFT"
    }
  ]
}

export const IDL: MinimalMint = {
  "version": "0.0.1",
  "name": "minimal_mint",
  "instructions": [
    {
      "name": "createNftPool",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "mintNft",
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority2",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mintPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initializeCandyMachine",
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority1",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority2",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "data",
          "type": {
            "defined": "CandyMachineData"
          }
        }
      ]
    },
    {
      "name": "updateCandyMachine",
      "accounts": [
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority1",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "authority2",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "price",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "goLiveDate",
          "type": {
            "option": "i64"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "CandyMachine",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority1",
            "type": "publicKey"
          },
          {
            "name": "authority2",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "data",
            "type": {
              "defined": "CandyMachineData"
            }
          }
        ]
      }
    },
    {
      "name": "MintPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "mintCnt",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Creator",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "address",
            "type": "publicKey"
          },
          {
            "name": "verified",
            "type": "bool"
          },
          {
            "name": "share",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "CandyMachineData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": "u64"
          },
          {
            "name": "nftsMinted",
            "type": "u64"
          },
          {
            "name": "goLiveDate",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "creators",
            "type": {
              "vec": {
                "defined": "Creator"
              }
            }
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "sellerFeeBasisPoints",
            "type": "u16"
          },
          {
            "name": "maxSupply",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "tokenUris",
            "type": {
              "vec": "string"
            }
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "NotEnoughSOL",
      "msg": "You don't have enough SOL to mint this NFT"
    },
    {
      "code": 6001,
      "name": "CandyMachineNotLiveYet",
      "msg": "The launch date has not come yet"
    },
    {
      "code": 6002,
      "name": "CandyMachineEmpty",
      "msg": "There are no more NFTs to mint in this collection"
    },
    {
      "code": 6003,
      "name": "AlreadyMintedNFT",
      "msg": "You have already minted NFT"
    }
  ]
}