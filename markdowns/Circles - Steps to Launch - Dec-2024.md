# Circles: Steps to Launch

## Stages of Circles Accounts
1. **Create Profile**
   - Set up a Safe wallet.
   - Optionally add a name, profile picture, and email (off-chain).

2. **Receive Invites**
   - Receive trust connections (invites) from existing users.

3. **Activate Profile**
   - Accept at least one invite to start minting CRC.

4. **Establish Trust**
   - Gain trust from at least three non-blacklisted accounts to enable transitive sending of CRC (enforced via the UI).

5. **Join a Group**
   - Join groups to enable additional functionality, such as selling CRC.
   - Verified CRC refers to CRC from users in relevant groups.

## Group Administration
- Admins will add users to groups in real-time once requirements are fulfilled.
- Once added to a group:
  - The UI will display the user as "verified."
  - The user's CRC will be marked as "verified CRC."
  - Verified users can sell CRC.

### Initial Group: Circles Early Supporter (CES)
- First 10,000 users will form the CES group (name TBD).

## Rules for Joining a Group
1. **Blacklist Check**
   - Accounts identified as fake (e.g., V1 Sybil accounts) cannot join the group.
2. **Trust Requirements**
   - The account must be trusted by at least three non-blacklisted accounts.
3. **Liquidity Provision**
   - **Directly**: Provide $100 into a Liquidity Bootstrapping Pool (LBP).
   - **Indirectly**: Gain trust from three people who have provided liquidity.

### Additional Liquidity Support
- Gnosis will contribute $100 in sDAI for each CES member.
- Future groups and additional verification methods will be introduced:
  - Examples: Gnosis Pay group, local groups.

---

## Trading Verified CRC
- Users in verified groups (e.g., CES) can trade CRC.
- **Process:**
  1. Determine how many verified CRC the user holds.
  2. Convert personal CRC into CES group tokens.
  3. Wrap tokens into ERC20 format (rebasing or non-rebasing TBD).
  4. Trade CES tokens via platforms like Cowswap.

---

## Buying CRC and Trusting Groups
- **Do not trust groups.**
  - Groups are in early development and may pose risks:
    - Multisig-controlled groups can mint unlimited CRC.
    - Trusting such groups can jeopardize all associated CRC balances.
- **Buying CRC:**
  - Users can purchase CES CRC directly via Cowswap.
  - Use a post-hook to unwrap ERC20 tokens into ERC1155 format.

---

## Goals
- Maximize the number of users backing their own CRC.
- Attract CRC believers who are willing to invest in the ecosystem.

### Sub-Tasks
1. Strengthen Circles identities:
   - Link profiles to existing identities.
   - Build trust networks.
2. Facilitate bridging funds into Metri:
   - Encourage investment in personal identities.

---

## Liquidity and Reserve Setup
- **Backing CRC:**
  - Offer goods and services on the Circles marketplace (coming soon).
  - Use reserves (BTC, ETH, GNO, sDAI) to back personal CRC.
  - Leverage reserves from trusted connections.

### Setting Up Liquidity
1. **Steps:**
   - Use 100 personal CRC.
   - Buy $100 of reserve assets via Cowswap.
   - Set up an LBP pool:
     - Initial weights: 99% reserve, 1% CRC.
     - Gradual shift to 50/50 over one year.

2. **CES Group Price Checking:**
   - Compare LBP pool prices with CES prices for arbitrage opportunities:
     - Buy CRC if LBP < CES.
     - Redeem CES for CRC if LBP > CES.

---

## Friend Discovery
- Enhance friend-finding:
  - Notify users when V1 connections join V2.
  - Connect wallets to find friends.
  - Integrate tools like POAP and Ethereum follow protocols.

---

## Arbitrage Mechanism
- Automate price corrections between personal CRC and CES CRC:
  - Use arbitrage bots to maintain equilibrium across pools and trade routes.
