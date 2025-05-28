const references = [
    `“Plastic Pollution.” IUCN, 22 May 2024, iucn.org/resources/issues-brief/plastic-pollution.`,
    `Davison, Tamara. “How Much Plastic Actually Gets Recycled?” Stats & Figures, CleanHub, 11 Sept. 2024, blog.cleanhub.com/how-much-plastic-is-recycled.`,
    `Chariot Energy. “How Long Does It Take for Plastic to Decompose?” Chariot Energy, 28 May 2024, chariotenergy.com/blog/how-long-until-plastic-decomposes/.`,
    `“Plastic Pollution: Facts & Figures.” Surfers Against Sewage, www.sas.org.uk/plastic-pollution/plastic-pollution-facts-figures/. Accessed 27 May 2025. `,
    `Lee, Yongjin, et al. “Health Effects of Microplastic Exposures: Current Issues and Perspectives in South Korea.” Yonsei Medical Journal, U.S. National Library of Medicine, May 2023, pmc.ncbi.nlm.nih.gov/articles/PMC10151227/.`,
    `Fisher, Chloe. “Plastic Pollution in the Ocean - 2025 Facts and Statistics.” Recycle Track Systems, 30 Dec. 2023, www.rts.com/blog/plastic-pollution-in-the-ocean-facts-and-statistics/.`,
    `Burgin, Tucker, et al. “The Reaction Mechanism of the IDEONELLA Sakaiensis PETase Enzyme.” Nature News, Nature Publishing Group, 27 Mar. 2024, www.nature.com/articles/s42004-024-01154-x.`,
    `Lase, Irdanto, et al. “Material Flow Analysis and Recycling Performance of an Improved Mechanical Recycling Process for Post-Consumer Flexible Plastics.” Waste Management, Pergamon, 18 Sept. 2022, www.sciencedirect.com/science/article/pii/S0956053X22004470.`,
    `Ringle, Erik F. “Grid Modernization News.” NREL, www.nrel.gov/grid/news/features/2022/scientists-discover-enzymes-cheaper-to-recycle-waste-polyester-textiles-and-bottles-than-making-from-petroleum. Accessed 27 May 2025.`,
    `Georgia. “What Is Chemical Recycling, Why Does It Have so Many Different Names, and Why Does It Matter?” Closed Loop Partners, 28 Mar. 2025, www.closedlooppartners.com/what-is-chemical-recycling/.`
]

export default function References() {
    return (
        <div className="w-screen text-center py-25">
            <h1 className="text-5xl font-bold mb-15">References</h1>
            {references.map((reference, index) => {
                return <>[{index + 1}] {reference}<br /></>
            })}
        </div>
    )
}