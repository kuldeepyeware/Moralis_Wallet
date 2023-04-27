const Ethereum = {
  hex: "0x1",
  name: "Ethereum",
  rpcUrl: "https://eth.llamarpc.com",
  ticker: "ETH",
};

const SepoliaTestnet = {
  hex: "0xaa36a7",
  name: "Sepolia Testnet",
  rpcUrl: "https://rpc.sepolia.org",
  ticker: "ETH",
};

const Polygon = {
  hex: "0x89",
  name: "Polygon",
  rpcUrl: "https://polygon.llamarpc.com",
  ticker: "MATIC",
};

const MumbaiTestnet = {
  hex: "0x13881",
  name: "Mumbai Testnet",
  rpcUrl: "https://polygon-mumbai.blockpi.network/v1/rpc/public",
};

export const CHAINS_CONFIG = {
  "0x1": Ethereum,
  "0xaa36a7": SepoliaTestnet,
  "0x89": Polygon,
  "0x13881": MumbaiTestnet,
};
