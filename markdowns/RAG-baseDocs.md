
Concept & Vision:
Circles envisions a fair, social form of digital money, fostering inclusive and sustainable economies at local and global scales. It empowers individuals and communities to issue, hold, and transact with personal currencies, all interconnected through trust networks.
Foundation & History:
Founded by Martin Koeppelmann, Circles v1 launched on October 15th, 2020.
Circles v2 was deployed via a public ceremony on October 15th, 2024.
Open-Source & Community-Driven:
Various teams have contributed to Circles, working with differing degrees of coordination and autonomy. The protocol continuously evolves through open-source collaboration, community input, and ongoing development efforts by different contributors.
Technical Foundations:

Blockchain & Standards:
Circles is built on the Gnosis Chain, leveraging ERC-1155 multi-token standards to efficiently manage multiple token types (personal and group currencies) within a single contract.
Smart Contracts:
The Circles “Hub” contract oversees registration of new participants (“humans”), issuance of personal currencies, trust relationships, and demurrage application.
Groups & Organizations:
In addition to individuals, groups and organizations can participate, issue their own currencies, and establish trust relationships, enriching the economic graph.
Goals of Circles:

Fair Distribution of Money:
Every participant is empowered to mint their own currency, reducing inequality and ensuring a baseline level of economic participation.
Community Strengthening:
Trust-based currency networks foster community connections, strengthening local economies and encouraging real-world relationships.
Sustainable Circulation:
A built-in demurrage system discourages hoarding, promoting active use and continuous circulation of currency.
Flexible Experimentation:
Circles serves as a laboratory for economic innovations, community-driven initiatives, and locally adaptable monetary models.
Empowered Participation:
Individuals and communities can shape their economic interactions and future developments in a decentralized, open-source environment.
Personal Currencies & Issuance:

Continuous Minting:
Each registered participant (human) mints one Circle per hour, retroactively claimable for up to 14 days.
Minting Mechanics:
The personalMint() function ensures fair and time-based issuance. Past days’ issuance accounts for demurrage, maintaining equitable distribution.
Identity & Tokens:
Each personal currency is represented as a unique token ID derived from the participant’s address, managed by the ERC-1155 standard.
Trust Networks:

Establishing Trust:
Participants can use the trust() function to form trust relationships with others, including individuals, organizations, and groups. Trust can have expiration dates or be indefinite.
Social Graph & Transactions:
Trust creates a social graph, enabling path-based transactions. Transitive transfers occur along chains of trusted connections, verified by isPermittedFlow().
Value via Trust:
Currency value and acceptance emerge organically from these trust relationships, rather than from centralized authorities.
Demurrage:

7% Annual Rate:
Circles apply demurrage at ~7% per year, implemented daily. Balances decrease in “discounted” terms to encourage spending.
Encouraging Circulation:
Demurrage ensures money remains active rather than accumulating inertly. It maintains stable equilibrium and fairness over time.
Static vs. Demurraged Balances:
Circles also offer a static (non-rebalancing) token representation for smart contracts that need consistent value references.
Unit of Account & Stability:
One Circle per hour anchors the unit of account. The demurrage mechanism ensures equilibrium, preventing supply distortion over the long term.
Total Supply & Equilibrium:

Issuance vs. Demurrage Balance:
Each person can mint ~8,760 Circles/year. With 7% annual demurrage, supply stabilizes at a maximum of ~125,142 Circles per person after about 42 years.
Equilibrium Model:
At equilibrium:
Annual issuance: 8,760 Circles
Annual demurrage: 7% of max supply (x)
8,760 = 0.07x → x ≈ 125,142 Circles
Long-Term Dynamics:
Over time, each participant’s holdings approach but never exceed this equilibrium. Active spending, trust relationships, and community exchanges dynamically influence real balances.
Network-Wide Supply:
The total supply is a sum of all individuals’ Circles, adjusted by demurrage. Trust networks and transitive transfers integrate local economies into a diverse, flexible ecosystem.
Differences Between v1 and v2:

Refinements:
Circles v2 refines issuance, demurrage, and trust mechanics, aiming for improved usability, enhanced reliability, and clearer governance structures.
Community-Driven Evolution:
These updates are proposals for improvement, inviting community adoption. Circles remains an evolving experiment shaped by users.
References & Further Reading:

For deeper technical details, refer to official Circles documentation, internal development documents, Martin Koeppelmann’s presentations, or community-driven resources.
If a question arises that cannot be answered from current knowledge, acknowledge the uncertainty and guide the user to these resources.
No Financial or Legal Advice:
The assistant should not provide investment, legal, or personal financial advice. Direct users to qualified professionals if such queries arise.

Accuracy & Fact-Checking: Provide fact-based, verifiable information.
Clarity & Accessibility: Use plain language, examples, and analogies to help users understand complex concepts.
Uncertainty Handling: If unsure, acknowledge it and suggest official documentation or community channels.
Contextual Adaptation: Offer deeper technical details upon request or simplify explanations for newcomers.
No Financial Advice: Avoid giving investment or legal advice. Redirect such inquiries to professionals.


Circles is a community-driven, trust-based social currency network on the Gnosis Chain.
Each participant mints their own currency, balanced by demurrage to maintain fairness and prevent hoarding.
Trust networks enable path-based transactions, embedding social connections into economic flows.
The system aims for a sustainable equilibrium, ensuring long-term fairness, stability, and a baseline economic participation for all.
The evolution of Circles is shaped by the community, open-source contributions, and the collective willingness to adopt and adapt new ideas.
