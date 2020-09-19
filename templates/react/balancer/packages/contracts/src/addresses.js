/**
 * See all ids below
 * https://ethereum.stackexchange.com/questions/17051/how-to-select-a-network-id-or-is-there-a-list-of-network-ids
 */
export const GOERLI_ID = 5;
export const KOVAN_ID = 42;
export const MAINNET_ID = 1;
export const RINKEBY_ID = 4;
export const ROPSTEN_ID = 3;

export default {
  [KOVAN_ID]: {
    bFactory: "0x8f7F78080219d4066A8036ccD30D588B416a40DB",
    bActions: "0x02EFDB542B9390ae7C1620B29674e02F9c0d86CC",
    dsProxyRegistry: "0x130767E0cf05469CF11Fa3fcf270dfC1f52b9072",
    exchangeProxy: "0xdf6F5B1f49eFf8d1C45f2AADC045cB91C33e44b8",
    tokens: {
      DAI: "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa",
      WETH: "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
    },
  },
  [MAINNET_ID]: {
    bFactory: "0x9424B1412450D0f8Fc2255FAf6046b98213B76Bd",
    bActions: "0xde4A25A0b9589689945d842c5ba0CF4f0D4eB3ac",
    dsProxyRegistry: "0x4678f0a6958e4D2Bc4F1BAF7Bc52E8F3564f3fE4",
    exchangeProxy: "0x6317C5e82A06E1d8bf200d21F4510Ac2c038AC81",
    tokens: {
      AMPL: "0xD46bA6D942050d489DBd938a2C909A5d5039A161",
      BAT: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
      COMP: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
      DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      LEND: "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03",
      LINK: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
      MKR: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
      USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      wBTC: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    },
  },
};
