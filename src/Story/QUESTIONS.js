export const QUESTIONS = [
    {
        id: 1,
        title: "Do you support any type of document?",
        detail: "We support any type of document that contains readable text, though poorly formatted documents are likely to result in lower extraction quality. Kensho Extract performs best with PDF files."
    },
    {
        id: 2,
        title: "Do you support languages beyond English?",
        detail: "Yes, we support extraction in any language, although performance will be better for left-to-right languages."
    },
    {
        id: 3,
        title: "Do you support table extraction?",
        detail: "Yes! You can extract tables and text from documents in their correct reading order."
    },
    {
        id: 4,
        title: "I only care about a specific topic in each document. Can you automate its extraction?",
        detail: "Extract’s ability to automate extraction based on topic really depends on the use case. In some instances and with some training, Kensho Extract will be able to identify and send back just the table(s) or section(s) that interest you, leaving out everything else. Reach out to us for help on your specific needs!"
    },
    {
        id: 5,
        title: "How good is NERD’s performance?",
        detail: "NERD’s entity predictions are market-leading for business and finance use cases as measured by F1, precision, and recall. In terms of its API, NERD is capable of handling more than 1 million characters in a single request and can respond synchronously or asynchronously."
    },
    {
        id: 6,
        title: "What programming languages does NERD support?",
        detail: "NERD can support any language capable of making a REST API call, such as Python, R, Java, JavaScript, TypeScript, Ruby, Rust, and more."
    },
    {
        id: 7,
        title: "Can NERD output other types of entity IDs? ",
        detail: "If you would like to consume NERD’s output as other entity types (e.g., Global Tax IDs, Moody’s, Fitch, D&B Duns, LEI, etc.), we recommend using S&P’s BECRS dataset. To learn more, contact us."
    },
    {
        id: 8,
        title: "How is NERD priced?",
        detail: "NERD is available as a pay as you go solution priced per thousand characters processed or through an annual subscription. Contact us to discuss what’s right for you."
    },
    {
        id: 9,
        title: "Can I use NERD to disambiguate to other knowledge bases?",
        detail: "We are always open to exploring other knowledge bases. Contact us to discuss your needs."
    },
    {
        id: 10,
        title: "How does NERD work?",
        detail: "Kensho combines the latest advances in machine learning with S&P Global’s unparalleled data universe to train the models that make up NERD."
    },
    {
        id: 11,
        title: "How does NERD handle subsidiary and parent companies?",
        detail: "NERD is designed to recognize companies at the appropriate levels of their corporate hierarchies. Parent companies and their subsidiaries are both distinguished and represented according to the relationships contained in Capital IQ. NERD reports the most up-to-date information for these relationships -- even if the corporate hierarchies or names have changed."
    },
    {
        id: 12,
        title: "How do I use NERD?",
        detail: "NERD is accessed via REST API. Simply input your text, specify to which knowledge base(s) you would like to link, and get your results. NERD’s results are returned as a list of JSON annotations, each corresponding to a mention of an entity in your document. Each annotation will include: Location of the entity in the text, Entity Name, Entity ID in either Capital IQ or Wikidata, Entity Type and other relevant metadata. We have built and helped customers build other ways to consume NERD, such as a Microsoft Excel plug-in. If you are interested in such options, please contact us."
    },
    {
        id: 13,
        title: "How does NERD safeguard my data?",
        detail: "Kensho takes your privacy and security seriously. Data submitted to NERD is only temporarily stored in order to perform the service and is secured from being accessed by others. Contact us to learn more."
    },
    {
        id: 14,
        title: "How good is Classify’s performance?",
        detail: "Classify’s performance is best in class, accelerating time to value and driving superior outcomes in any application. It trains faster, annotates faster, and produces better annotations. It more than meets the needs of serious workloads."
    },
    {
        id: 15,
        title: "How do I use Classify?",
        detail: "Classify is accessed via a simple REST API. Easily define your concepts, submit your text, and receive a list of annotated concepts in response in the form of a JSON. For more detailed information, please visit the API reference. We have built and helped customers build other ways to consume Classify, such as extensions for applications such as Microsoft Office. If you are interested in such options, please contact us."
    },
    {
        id: 16,
        title: "Can I change concepts I’ve created?",
        detail: "Yes! You can continuously update your Classify model with new custom concepts or refinements to existing concepts. Even better, Classify maintains a history of these model updates, so you can revert back any model you created."
    },
    {
        id: 17,
        title: "What programming languages does Classify support?",
        detail: "Classify can support any language capable of making a REST API call, such as Python, R, Java, JavaScript, TypeScript, Ruby, Rust and more."
    },
    {
        id: 18,
        title: "How is Classify priced?",
        detail: "Classify is available as a pay-as-you-go solution priced per thousand characters processed or through an annual subscription. Contact us to discuss what’s right for you."
    },
    {
        id: 19,
        title: "How does Classify work?",
        detail: "Classify is a collection of advanced machine learning models that represent the conceptual content of documents to look for your specific topics. Kensho combines the latest advances in machine learning with S&P Global’s unparalleled data universe to train the models that underlie Classify."
    },
    {
        id: 20,
        title: "How does Classify safeguard my data?",
        detail: "Kensho takes your privacy and security seriously. Data submitted to Classify is encrypted in transit and at rest, inaccessible to anyone but you, the user. Contact us to learn more."
    },
]