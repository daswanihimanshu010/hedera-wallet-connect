import React from 'react';
import { Button, MenuItem, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useWalletInterface } from "../services/wallets/useWalletInterface";
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from "react";
import { AccountId, TokenId } from "@hashgraph/sdk";
import { MirrorNodeClient } from "../services/wallets/mirrorNodeClient";
import { appConfig } from "../config";

const UNSELECTED_SERIAL_NUMBER = -1;

export default function Home() {
  const { walletInterface, accountId } = useWalletInterface();
  const [selectedTokenId, setSelectedTokenId] = useState('');

  // Purpose: Get the account token balances with token info for the current account and set them to state
  useEffect(() => {
    if (accountId === null) {
      return;
    }
    const mirrorNodeClient = new MirrorNodeClient(appConfig.networks.testnet);
    // Get token balance with token info for the current account
    mirrorNodeClient.getAccountTokenBalancesWithTokenInfo(AccountId.fromString(accountId)).then((tokens) => {
      // set to state
      console.log(tokens);
    }).catch((error) => {
      console.error(error);
    });
  }, [accountId])

  // reset amount and serial number when token id changes
  useEffect(() => {
  }, [selectedTokenId]);

  return (
    <Stack alignItems="center" spacing={4}>
      <Typography
        variant="h4"
        color="white"
      >
        Let's build a dApp on Hedera
      </Typography>
    </Stack>
  )
}