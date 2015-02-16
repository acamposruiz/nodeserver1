{
  "engine_result": "tesSUCCESS",
  "engine_result_code": 0,
  "engine_result_message": "The transaction was applied. Only final in a validated ledger.",
  "ledger_hash": "4455BFCD503B592D988D2E228DBA1ED648FFBD07F662D90ADCED7425D4D9F24A",
  "ledger_index": 11729101,
  "meta": {
    "AffectedNodes": [
      {
        "CreatedNode": {
          "LedgerEntryType": "Offer",
          "LedgerIndex": "3495E4A78EB9C4582BE3992A76242D0D7C2344F6980293B92C81B26DD13374DB",
          "NewFields": {
            "Account": "rUBLCjWdsPPMkppdFXVJWhHnr3FNqCzgG3",
            "BookDirectory": "DFA3B6DDAB58C7E8E5D944E736DA4B7046C30E4F460FD9DE4D04FF152F141FB8",
            "OwnerNode": "0000000000001673",
            "Sequence": 1625055,
            "TakerGets": "19198411483",
            "TakerPays": {
              "currency": "USD",
              "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
              "value": "270"
            }
          }
        }
      },
      {
        "ModifiedNode": {
          "FinalFields": {
            "Flags": 0,
            "IndexPrevious": "0000000000001672",
            "Owner": "rUBLCjWdsPPMkppdFXVJWhHnr3FNqCzgG3",
            "RootIndex": "7201C1601C393E932C5F2A1E4DDA0B260FAE9E51B77AD25C7D1A80891F802D0A"
          },
          "LedgerEntryType": "DirectoryNode",
          "LedgerIndex": "6C3CEEC262DB9DDA829862633B6274FF35A41E0F0DA1E7C510530423F3C5181F"
        }
      },
      {
        "ModifiedNode": {
          "FinalFields": {
            "Account": "rUBLCjWdsPPMkppdFXVJWhHnr3FNqCzgG3",
            "Balance": "475970233796",
            "Flags": 0,
            "OwnerCount": 36,
            "Sequence": 1625056
          },
          "LedgerEntryType": "AccountRoot",
          "LedgerIndex": "B567935CFAF8374E99C3592F8A3BCA0335610253CEFF68D8D3A17F09145FED23",
          "PreviousFields": {
            "Balance": "475970248796",
            "OwnerCount": 35,
            "Sequence": 1625055
          },
          "PreviousTxnID": "B79749AB7D79FBC5040998DBA98E4FA943EADB339831BBED6C52806505CB9C11",
          "PreviousTxnLgrSeq": 11729097
        }
      },
      {
        "CreatedNode": {
          "LedgerEntryType": "DirectoryNode",
          "LedgerIndex": "DFA3B6DDAB58C7E8E5D944E736DA4B7046C30E4F460FD9DE4D04FF152F141FB8",
          "NewFields": {
            "ExchangeRate": "4D04FF152F141FB8",
            "RootIndex": "DFA3B6DDAB58C7E8E5D944E736DA4B7046C30E4F460FD9DE4D04FF152F141FB8",
            "TakerPaysCurrency": "0000000000000000000000005553440000000000",
            "TakerPaysIssuer": "0A20B3C85F482532A9578DBB3950B85CA06594D1"
          }
        }
      }
    ],
    "TransactionIndex": 1,
    "TransactionResult": "tesSUCCESS"
  },
  "status": "closed",
  "transaction": {
    "Account": "rUBLCjWdsPPMkppdFXVJWhHnr3FNqCzgG3",
    "Fee": "15000",
    "Flags": 2147483648,
    "LastLedgerSequence": 11729108,
    "Sequence": 1625055,
    "SigningPubKey": "03D606359EEA9C0A49CA9EF55F6AED6C8AEDDE604223C1BE51A2D0460A725CF173",
    "TakerGets": "19198411483",
    "TakerPays": {
      "currency": "USD",
      "issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
      "value": "270"
    },
    "TransactionType": "OfferCreate",
    "TxnSignature": "3045022100FF6B4E8E41548D5CE819C7E68D40C5501CB557368DB87DC6A78BE594B762A32502204573A23BA57BBC7A8F106A71ABF07A5BCABC438133EC652BD4CF83D2A29741BA",
    "date": 477324150,
    "hash": "A86798B8BEF750DBE7D98DB1B5AEDE06930F996D72463543A4AB7C0C211DE5D6",
    "owner_funds": "475770233796"
  },
  "type": "transaction",
  "validated": true
}