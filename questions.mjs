export const bankVersion="2026-10-26-INEP";
export const sources={
  "clark": "CLARK, M. A. et al. Farmacologia ilustrada. 5. ed. Porto Alegre: Artmed, 2013. cap. 14.",
  "goodman": "BRUNTON, L. L.; CHABNER, B. A.; KNOLLMANN, B. C. (org.). As bases farmacológicas da terapêutica de Goodman & Gilman. 12. ed. Porto Alegre: AMGH, 2012.",
  "aula": "Saulo Mendes. Analgésicos Opioides, 2023. Arquivo: Analgésicos Opioides 2023.pdf.",
  "artigo": "Trivedi, Shaikh e Gwinnutt. Farmacologia dos opioides (parte 1), WFSA/ATOTW 64, tradução SBA. Arquivo: Artigo Opioides.pdf.",
  "inep": "BRASIL. Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira. Guia de elaboração e revisão de itens: Banco Nacional de Itens - Enade. 3. ed. Brasília, DF: Inep/MEC, 2026. https://download.inep.gov.br/bni/enade/guia_de_elaboracao_revisao_de_itens_v1.pdf",
  "cpic": "CREWS, K. R. et al. Clinical Pharmacogenetics Implementation Consortium guideline for CYP2D6, OPRM1, and COMT genotypes and select opioid therapy. Clinical Pharmacology & Therapeutics, v. 110, n. 4, p. 888-896, 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8249478/",
  "fda": "U.S. FOOD AND DRUG ADMINISTRATION. New safety measures announced for opioid analgesics, prescription opioid cough products, and benzodiazepines. 2016. https://www.fda.gov/drugs/food-and-drug-administration-overdose-prevention-framework/new-safety-measures-announced-opioid-analgesics-prescription-opioid-cough-products-and",
  "naloxone": "DAILYMED. Naloxone hydrochloride injection, solution: prescribing information. Seções Clinical pharmacology e Warnings. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e65e03c1-9a66-b30b-e053-2995a90aeb73",
  "morphine": "DAILYMED. Morphine sulfate tablets: prescribing information. Seções Clinical pharmacology e Renal impairment. https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=58476a6b-b54b-5491-e063-6394a90a38c6&type=display",
  "acmt": "STOLBACH, A. et al. ACMT Position Statement: Interpretation of urine opiate and opioid tests. Journal of Medical Toxicology, 2022. https://pmc.ncbi.nlm.nih.gov/articles/PMC8938527/"
};
export const readiness=[
  {
    "id": "r1",
    "topic": "Sinalização de receptores",
    "objective": "Inferir a sinalização de um receptor opioide a partir de resultados experimentais.",
    "cognitive": "Analisar",
    "context": "Em um ensaio com células que expressam receptores μ, um composto reduziu a concentração intracelular de AMPc previamente elevada por forskolina. A presença de naloxona impediu essa redução. A viabilidade celular foi mantida nas condições avaliadas.",
    "command": "Qual mecanismo de sinalização explica o efeito do composto nesse ensaio?",
    "stem": "Em um ensaio com células que expressam receptores μ, um composto reduziu a concentração intracelular de AMPc previamente elevada por forskolina. A presença de naloxona impediu essa redução. A viabilidade celular foi mantida nas condições avaliadas.\n\nQual mecanismo de sinalização explica o efeito do composto nesse ensaio?",
    "options": [
      "Acoplamento a Gs, com estímulo da adenililciclase.",
      "Acoplamento a Gq, com estímulo da fosfolipase C.",
      "Acoplamento a Gi/o, com inibição da adenililciclase.",
      "Ativação de guanililciclase, com aumento de GMPc.",
      "Ativação de tirosina quinase, com fosforilação do receptor."
    ],
    "answer": 2,
    "rationales": [
      "ERRADA. A ativação de Gs favoreceria aumento de AMPc, em sentido oposto ao resultado observado.",
      "ERRADA. A via Gq/fosfolipase C está associada a IP3 e diacilglicerol, e não é o acoplamento característico dos receptores μ.",
      "CERTA. Receptores μ acoplam-se a Gi/o. A inibição da adenililciclase reduz AMPc; o bloqueio por naloxona apoia a participação do receptor opioide nesse efeito.",
      "ERRADA. GMPc e guanililciclase pertencem a outra via de sinalização e não explicam a resposta reversível por antagonismo μ.",
      "ERRADA. Receptores opioides clássicos são acoplados à proteína G, em vez de apresentarem o mecanismo típico de receptores tirosina quinase."
    ],
    "explanation": "Receptores μ acoplam-se a Gi/o. A inibição da adenililciclase reduz AMPc; o bloqueio por naloxona apoia a participação do receptor opioide nesse efeito.",
    "source": "artigo",
    "locator": "Mecanismo de ação; Clark, p. 170.",
    "contextCredit": "Situação hipotética elaborada para este item.",
    "bankVersion": "2026-10-26-INEP"
  },
  {
    "id": "r2",
    "topic": "Transmissão nociceptiva",
    "objective": "Relacionar alterações pré e pós-sinápticas à inibição da transmissão nociceptiva.",
    "cognitive": "Analisar",
    "context": "Em uma preparação do corno dorsal da medula espinal, um agonista opioide reduziu a liberação de glutamato pelos terminais aferentes. Na mesma preparação, os neurônios pós-sinápticos apresentaram potencial de membrana mais negativo.",
    "command": "Qual combinação de alterações iônicas é compatível com os dois resultados?",
    "stem": "Em uma preparação do corno dorsal da medula espinal, um agonista opioide reduziu a liberação de glutamato pelos terminais aferentes. Na mesma preparação, os neurônios pós-sinápticos apresentaram potencial de membrana mais negativo.\n\nQual combinação de alterações iônicas é compatível com os dois resultados?",
    "options": [
      "Redução da entrada pré-sináptica de Ca²⁺ e aumento da saída pós-sináptica de K⁺.",
      "Redução da entrada pré-sináptica de Ca²⁺ e redução da saída pós-sináptica de K⁺.",
      "Aumento da entrada pré-sináptica de Ca²⁺ e aumento da saída pós-sináptica de K⁺.",
      "Aumento da entrada pré-sináptica de Ca²⁺ e aumento da entrada pós-sináptica de Na⁺.",
      "Aumento da entrada pré-sináptica de Na⁺ e redução da saída pós-sináptica de K⁺."
    ],
    "answer": 0,
    "rationales": [
      "CERTA. Menor influxo de Ca²⁺ reduz a exocitose de transmissores. Maior efluxo de K⁺ favorece hiperpolarização, explicando os dois achados.",
      "ERRADA. A alteração do cálcio explica a menor liberação de glutamato, mas reduzir a saída de K⁺ não explica a hiperpolarização descrita.",
      "ERRADA. O efluxo de K⁺ é compatível com hiperpolarização, mas aumentar Ca²⁺ no terminal favoreceria liberação de transmissores.",
      "ERRADA. A entrada de Ca²⁺ favorece exocitose e a entrada de Na⁺ favorece despolarização, em oposição aos dois resultados.",
      "ERRADA. A entrada de Na⁺ e a redução do efluxo de K⁺ favorecem excitabilidade, sem explicar o padrão observado."
    ],
    "explanation": "Menor influxo de Ca²⁺ reduz a exocitose de transmissores. Maior efluxo de K⁺ favorece hiperpolarização, explicando os dois achados.",
    "source": "clark",
    "locator": "p. 170, figura 14.2.",
    "contextCredit": "Situação hipotética elaborada para este item.",
    "bankVersion": "2026-10-26-INEP"
  },
  {
    "id": "r3",
    "topic": "Efeito respiratório",
    "objective": "Interpretar alterações ventilatórias relacionadas à exposição a opioides.",
    "cognitive": "Analisar",
    "context": "Após receber morfina, um paciente passou de 16 para 8 incursões respiratórias por minuto, com elevação progressiva da pressão de CO₂ e sonolência. Não foram observados sinais de obstrução das vias aéreas na avaliação inicial.",
    "command": "Qual alteração farmacodinâmica explica o padrão ventilatório apresentado?",
    "stem": "Após receber morfina, um paciente passou de 16 para 8 incursões respiratórias por minuto, com elevação progressiva da pressão de CO₂ e sonolência. Não foram observados sinais de obstrução das vias aéreas na avaliação inicial.\n\nQual alteração farmacodinâmica explica o padrão ventilatório apresentado?",
    "options": [
      "Aumento da resposta central ao CO₂, com redução do estímulo periférico à ventilação.",
      "Aumento do tônus brônquico, com retenção de CO₂ por obstrução ao fluxo expiratório.",
      "Redução da difusão alveolar de CO₂, com aumento compensatório da frequência respiratória.",
      "Redução da força muscular periférica, com preservação da resposta central à hipercapnia.",
      "Redução da resposta central ao CO₂, com diminuição do impulso ventilatório."
    ],
    "answer": 4,
    "rationales": [
      "ERRADA. Maior resposta ao CO₂ tenderia a estimular a ventilação; não corresponde à depressão central por morfina.",
      "ERRADA. Broncoespasmo exigiria achados de obstrução e não é o mecanismo principal do padrão central descrito.",
      "ERRADA. O caso mostra redução, e não compensação com aumento, da frequência respiratória. O efeito opioide é predominantemente sobre o controle ventilatório.",
      "ERRADA. Uma limitação periférica com controle central preservado não é a explicação farmacodinâmica característica da morfina nesse contexto.",
      "CERTA. A morfina reduz a responsividade do centro respiratório ao CO₂, podendo produzir hipoventilação e hipercapnia. A associação temporal e o padrão descrito sustentam essa interpretação."
    ],
    "explanation": "A morfina reduz a responsividade do centro respiratório ao CO₂, podendo produzir hipoventilação e hipercapnia. A associação temporal e o padrão descrito sustentam essa interpretação.",
    "source": "clark",
    "locator": "p. 170-173.",
    "contextCredit": "Situação hipotética elaborada para este item.",
    "bankVersion": "2026-10-26-INEP"
  },
  {
    "id": "r4",
    "topic": "Adaptação aos efeitos",
    "objective": "Distinguir tolerância seletiva de outras respostas ao uso repetido de opioides.",
    "cognitive": "Analisar",
    "context": "Durante tratamento continuado com morfina, uma paciente passou a necessitar de reavaliações do esquema para manter o alívio da dor, cuja causa permaneceu estável. No mesmo período, a constipação persistiu, apesar da redução da sedação observada no início do tratamento.",
    "command": "Qual interpretação farmacológica integra a evolução desses efeitos?",
    "stem": "Durante tratamento continuado com morfina, uma paciente passou a necessitar de reavaliações do esquema para manter o alívio da dor, cuja causa permaneceu estável. No mesmo período, a constipação persistiu, apesar da redução da sedação observada no início do tratamento.\n\nQual interpretação farmacológica integra a evolução desses efeitos?",
    "options": [
      "Tolerância cruzada entre analgesia e constipação, decorrente da exposição ao mesmo agonista.",
      "Desenvolvimento desigual de tolerância, com adaptação menor ao efeito intestinal.",
      "Dependência física demonstrada pela persistência da constipação durante o tratamento.",
      "Hiperalgesia induzida por opioide demonstrada pela redução da sedação ao longo do uso.",
      "Redução uniforme da sensibilidade ao fármaco, com adaptação semelhante em cada tecido."
    ],
    "answer": 1,
    "rationales": [
      "ERRADA. Tolerância cruzada se refere à resposta a outro fármaco relacionado, e não à diferença entre efeitos do mesmo medicamento.",
      "CERTA. A tolerância se desenvolve de modo diferente entre os efeitos opioides. A adaptação ao efeito intestinal costuma ser menor, de modo que a constipação pode persistir.",
      "ERRADA. A constipação é um efeito farmacológico intestinal; sua persistência não demonstra abstinência nem caracteriza dependência física.",
      "ERRADA. A redução da sedação não demonstra aumento de sensibilidade dolorosa. Os dados não estabelecem hiperalgesia induzida por opioide.",
      "ERRADA. A evolução divergente entre sedação, analgesia e constipação contradiz a hipótese de adaptação uniforme."
    ],
    "explanation": "A tolerância se desenvolve de modo diferente entre os efeitos opioides. A adaptação ao efeito intestinal costuma ser menor, de modo que a constipação pode persistir.",
    "source": "clark",
    "locator": "p. 173, tolerância e dependência física.",
    "contextCredit": "Situação hipotética elaborada para este item.",
    "bankVersion": "2026-10-26-INEP"
  },
  {
    "id": "r5",
    "topic": "Eliminação de metabólitos",
    "objective": "Interpretar exposição a metabólitos da morfina diante de alteração renal.",
    "cognitive": "Analisar",
    "context": "Em um acompanhamento farmacocinético, a função renal de um paciente em uso de morfina diminuiu. A concentração do metabólito ativo morfina-6-glicuronídeo aumentou, enquanto a exposição ao fármaco original variou pouco. Não houve aumento da dose administrada.",
    "command": "Qual processo explica de forma mais consistente o aumento do metabólito?",
    "stem": "Em um acompanhamento farmacocinético, a função renal de um paciente em uso de morfina diminuiu. A concentração do metabólito ativo morfina-6-glicuronídeo aumentou, enquanto a exposição ao fármaco original variou pouco. Não houve aumento da dose administrada.\n\nQual processo explica de forma mais consistente o aumento do metabólito?",
    "options": [
      "Aumento da absorção intestinal da morfina, com maior chegada do fármaco ao fígado.",
      "Redução da ligação do metabólito à albumina, com aceleração de sua filtração renal.",
      "Redução da glicuronidação hepática da morfina, com aumento da formação do metabólito.",
      "Redução da depuração renal do metabólito, com acúmulo durante a exposição continuada.",
      "Aumento da passagem do metabólito para o SNC, com elevação de sua concentração plasmática."
    ],
    "answer": 3,
    "rationales": [
      "ERRADA. Maior absorção exigiria evidência adicional e tenderia a alterar a exposição ao fármaco original. O dado novo mais relevante é a redução da função renal.",
      "ERRADA. Acelerar a eliminação por filtração não explicaria acúmulo plasmático do metabólito.",
      "ERRADA. Reduzir a glicuronidação não explica maior formação de um glicuronídeo; essa hipótese também não integra o achado renal.",
      "CERTA. M6G depende da eliminação renal. A redução dessa depuração permite seu acúmulo, mesmo sem aumento expressivo da concentração da morfina original.",
      "ERRADA. A distribuição para o SNC pode influenciar o efeito, mas não explica por si só a elevação plasmática associada à redução da função renal."
    ],
    "explanation": "M6G depende da eliminação renal. A redução dessa depuração permite seu acúmulo, mesmo sem aumento expressivo da concentração da morfina original.",
    "source": "morphine",
    "locator": "Clinical pharmacology; Renal impairment.",
    "contextCredit": "Situação hipotética elaborada para este item.",
    "bankVersion": "2026-10-26-INEP"
  },
  {
    "id": "r6",
    "topic": "Farmacogenética",
    "objective": "Relacionar atividade CYP2D6 à bioativação da codeína.",
    "cognitive": "Analisar",
    "context": "Duas amostras de um estudo apresentaram exposição semelhante à codeína, mas a amostra de um participante mostrou menor proporção de morfina em relação à codeína. Nesse participante, a genotipagem indicou atividade muito reduzida do CYP2D6 e o efeito analgésico foi menor.",
    "command": "Qual relação entre metabolismo e resposta explica os achados desse participante?",
    "stem": "Duas amostras de um estudo apresentaram exposição semelhante à codeína, mas a amostra de um participante mostrou menor proporção de morfina em relação à codeína. Nesse participante, a genotipagem indicou atividade muito reduzida do CYP2D6 e o efeito analgésico foi menor.\n\nQual relação entre metabolismo e resposta explica os achados desse participante?",
    "options": [
      "Menor O-desmetilação da codeína, com menor formação de morfina.",
      "Maior glicuronidação da codeína, com maior ativação de receptores μ.",
      "Menor excreção renal da morfina, com menor exposição ao metabólito.",
      "Maior O-desmetilação da codeína, com maior depuração da morfina.",
      "Menor absorção intestinal da codeína, com menor exposição ao fármaco."
    ],
    "answer": 0,
    "rationales": [
      "CERTA. CYP2D6 participa da O-desmetilação da codeína em morfina. Atividade muito reduzida é compatível com menor formação de morfina e menor analgesia.",
      "ERRADA. A hipótese propõe maior ativação, em oposição à resposta observada, e não explica a relação com baixa atividade de CYP2D6.",
      "ERRADA. Menor eliminação renal tenderia a aumentar, e não reduzir, a exposição à morfina.",
      "ERRADA. A atividade reduzida de CYP2D6 não sustenta maior O-desmetilação; a hipótese também não explica a baixa razão morfina/codeína.",
      "ERRADA. A exposição à codeína foi semelhante entre os participantes, o que enfraquece a absorção como explicação dos achados."
    ],
    "explanation": "CYP2D6 participa da O-desmetilação da codeína em morfina. Atividade muito reduzida é compatível com menor formação de morfina e menor analgesia.",
    "source": "cpic",
    "locator": "Seções sobre CYP2D6 e codeína.",
    "contextCredit": "Situação hipotética elaborada para este item.",
    "bankVersion": "2026-10-26-INEP"
  },
  {
    "id": "r7",
    "topic": "Meperidina e metabólitos",
    "objective": "Associar alterações neurológicas ao acúmulo de metabólito opioide.",
    "cognitive": "Analisar",
    "context": "Um paciente com redução da função renal recebeu meperidina repetidamente. Ao longo do acompanhamento, apresentou tremores e mioclonias, sem melhora proporcional da analgesia. A análise identificou aumento da concentração de normeperidina.",
    "command": "Qual interpretação relaciona o resultado analítico às manifestações neurológicas?",
    "stem": "Um paciente com redução da função renal recebeu meperidina repetidamente. Ao longo do acompanhamento, apresentou tremores e mioclonias, sem melhora proporcional da analgesia. A análise identificou aumento da concentração de normeperidina.\n\nQual interpretação relaciona o resultado analítico às manifestações neurológicas?",
    "options": [
      "Predomínio de analgesia por ação μ da normeperidina, com tremores por controle insuficiente da dor.",
      "Aumento da tolerância à meperidina, com mioclonias decorrentes de menor ocupação de receptores.",
      "Acúmulo de metabólito neuroexcitatório, favorecido pela redução de sua eliminação renal.",
      "Desenvolvimento de abstinência por eliminação acelerada da meperidina e da normeperidina.",
      "Amplificação da sedação pela normeperidina, com mioclonias como sinal de depressão uniforme do SNC."
    ],
    "answer": 2,
    "rationales": [
      "ERRADA. O achado relevante é a neurotoxicidade da normeperidina. Atribuir os sinais a controle insuficiente da dor ignora a associação com seu acúmulo.",
      "ERRADA. Tolerância pode modificar a analgesia, mas não explica de modo adequado a associação entre normeperidina elevada e sinais neuroexcitatórios.",
      "CERTA. A normeperidina apresenta ação neuroexcitatória; sua eliminação reduzida favorece acúmulo e manifestações como tremores e mioclonias.",
      "ERRADA. O cenário mostra acúmulo de metabólito e função renal reduzida, não eliminação acelerada que sustentasse a explicação proposta.",
      "ERRADA. Tremores e mioclonias são compatíveis com excitação neurológica; descrevê-los como depressão uniforme ignora a toxicidade do metabólito."
    ],
    "explanation": "A normeperidina apresenta ação neuroexcitatória; sua eliminação reduzida favorece acúmulo e manifestações como tremores e mioclonias.",
    "source": "clark",
    "locator": "p. 173-174, meperidina.",
    "contextCredit": "Situação hipotética elaborada para este item.",
    "bankVersion": "2026-10-26-INEP"
  },
  {
    "id": "r8",
    "topic": "Distribuição para o SNC",
    "objective": "Interpretar a influência da lipossolubilidade na passagem por barreira.",
    "cognitive": "Analisar",
    "context": "Em um modelo de barreira hematoencefálica, fentanila e morfina foram avaliadas com a mesma concentração livre no compartimento de origem e pH constante. A fentanila apresentou passagem mais rápida pela barreira; a integridade do modelo foi preservada.",
    "command": "Qual propriedade explica a diferença de passagem observada nesse modelo?",
    "stem": "Em um modelo de barreira hematoencefálica, fentanila e morfina foram avaliadas com a mesma concentração livre no compartimento de origem e pH constante. A fentanila apresentou passagem mais rápida pela barreira; a integridade do modelo foi preservada.\n\nQual propriedade explica a diferença de passagem observada nesse modelo?",
    "options": [
      "Maior afinidade da fentanila pelos receptores μ no compartimento de origem.",
      "Maior formação de metabólitos ativos da fentanila durante a passagem pela barreira.",
      "Maior ligação da fentanila às proteínas plasmáticas no compartimento de origem.",
      "Maior ionização da fentanila, favorecendo sua difusão pela bicamada lipídica.",
      "Maior lipossolubilidade da fentanila, favorecendo sua permeação pela barreira."
    ],
    "answer": 4,
    "rationales": [
      "ERRADA. Afinidade pelo receptor influencia a interação farmacodinâmica; não é a propriedade que explica a permeação passiva da barreira nesse modelo.",
      "ERRADA. O experimento descreve passagem do fármaco, sem dados de bioativação que sustentem essa interpretação.",
      "ERRADA. A concentração livre foi controlada, retirando a diferença de ligação proteica como explicação imediata.",
      "ERRADA. A forma ionizada tende a atravessar menos facilmente a bicamada por difusão passiva; maior ionização não é a explicação para a permeação mais rápida descrita.",
      "CERTA. A maior lipossolubilidade da fentanila favorece a passagem por membranas. O controle da concentração livre e do pH permite interpretar a diferença de permeação."
    ],
    "explanation": "A maior lipossolubilidade da fentanila favorece a passagem por membranas. O controle da concentração livre e do pH permite interpretar a diferença de permeação.",
    "source": "clark",
    "locator": "p. 172 e seção fentanila.",
    "contextCredit": "Situação hipotética elaborada para este item.",
    "bankVersion": "2026-10-26-INEP"
  },
  {
    "id": "r9",
    "topic": "Mecanismo misto do tramadol",
    "objective": "Integrar ação opioide e ação monoaminérgica em modelo experimental.",
    "cognitive": "Analisar",
    "context": "Em um modelo experimental de antinocicepção, a naloxona reduziu, mas não aboliu, a resposta ao tramadol. Em uma avaliação complementar, o fármaco reduziu a recaptação neuronal de serotonina e noradrenalina.",
    "command": "Qual interpretação integra os resultados das duas avaliações?",
    "stem": "Em um modelo experimental de antinocicepção, a naloxona reduziu, mas não aboliu, a resposta ao tramadol. Em uma avaliação complementar, o fármaco reduziu a recaptação neuronal de serotonina e noradrenalina.\n\nQual interpretação integra os resultados das duas avaliações?",
    "options": [
      "A antinocicepção depende de antagonismo μ associado ao estímulo da recaptação de monoaminas.",
      "A antinocicepção envolve agonismo μ associado à inibição da recaptação de monoaminas.",
      "A antinocicepção decorre de bloqueio de COX associado à redução da síntese de prostaglandinas.",
      "A antinocicepção resulta de bloqueio de canais de sódio associado à inibição da condução axonal.",
      "A antinocicepção depende de ativação GABAérgica associada ao aumento de entrada de cloreto."
    ],
    "answer": 1,
    "rationales": [
      "ERRADA. O tramadol não apresenta antagonismo μ como mecanismo analgésico, e o ensaio complementar indica menor, não maior, recaptação.",
      "CERTA. O mecanismo misto reúne ação opioide e inibição da recaptação de serotonina e noradrenalina, compatível com a reversão parcial no modelo e com a avaliação complementar.",
      "ERRADA. A inibição de COX é característica de outros analgésicos e não integra os achados opioides e monoaminérgicos descritos.",
      "ERRADA. Bloqueio de canais de sódio pode reduzir condução, mas não explica a combinação de resultados desse experimento.",
      "ERRADA. A ação GABAérgica não é o mecanismo que articula o antagonismo por naloxona à redução da recaptação de monoaminas."
    ],
    "explanation": "O mecanismo misto reúne ação opioide e inibição da recaptação de serotonina e noradrenalina, compatível com a reversão parcial no modelo e com a avaliação complementar.",
    "source": "artigo",
    "locator": "Seção tramadol.",
    "contextCredit": "Situação hipotética elaborada para este item.",
    "bankVersion": "2026-10-26-INEP"
  },
  {
    "id": "r10",
    "topic": "Antagonismo opioide",
    "objective": "Inferir o tipo de antagonismo a partir de curvas concentração-resposta.",
    "cognitive": "Analisar",
    "context": "Em um ensaio com receptores μ, a adição de naloxona deslocou para a direita a curva concentração-resposta de um agonista opioide. O efeito máximo foi recuperado com concentrações maiores do agonista. A naloxona isolada não produziu resposta agonista mensurável.",
    "command": "Qual tipo de interação é compatível com esse resultado experimental?",
    "stem": "Em um ensaio com receptores μ, a adição de naloxona deslocou para a direita a curva concentração-resposta de um agonista opioide. O efeito máximo foi recuperado com concentrações maiores do agonista. A naloxona isolada não produziu resposta agonista mensurável.\n\nQual tipo de interação é compatível com esse resultado experimental?",
    "options": [
      "Agonismo parcial, com redução do efeito máximo pela menor atividade intrínseca.",
      "Antagonismo irreversível, com recuperação do efeito pela reposição dos receptores.",
      "Modulação alostérica negativa, com perda do efeito máximo no sistema avaliado.",
      "Antagonismo competitivo reversível, superável pelo aumento do agonista.",
      "Antagonismo fisiológico, com respostas opostas produzidas por receptores distintos."
    ],
    "answer": 3,
    "rationales": [
      "ERRADA. A naloxona isolada não mostrou atividade agonista e o padrão de deslocamento com máximo preservado favorece antagonismo competitivo.",
      "ERRADA. O ensaio não descreve reposição de receptores; o aumento da concentração de agonista superou o antagonismo na própria avaliação.",
      "ERRADA. A perda do efeito máximo indicada na alternativa não corresponde ao resultado descrito.",
      "CERTA. O deslocamento para a direita com efeito máximo preservado é compatível com antagonismo competitivo reversível, como o exercido pela naloxona.",
      "ERRADA. O ensaio envolve a interação no sistema de receptores μ, sem uma segunda via receptorial que produzisse antagonismo fisiológico."
    ],
    "explanation": "O deslocamento para a direita com efeito máximo preservado é compatível com antagonismo competitivo reversível, como o exercido pela naloxona.",
    "source": "naloxone",
    "locator": "Clinical pharmacology; fundamentos de antagonismo competitivo.",
    "contextCredit": "Situação hipotética elaborada para este item.",
    "bankVersion": "2026-10-26-INEP"
  }
];
export const application=[
  {
    "id": "a1",
    "topic": "Aplicação: comunicação em toxicologia",
    "objective": "Integrar achados clínicos e limites de triagem na comunicação de risco.",
    "cognitive": "Analisar",
    "context": "Um laboratório recebeu amostra de urina de paciente sonolento, com 7 incursões respiratórias por minuto e pupilas puntiformes. A equipe informou exposição possível a analgésico opioide. A triagem imunológica para opiáceos foi negativa; o fabricante informa baixa reatividade do ensaio para fentanila. A confirmação por método específico ainda está em andamento.",
    "command": "Qual comunicação do biomédico à equipe assistencial integra os achados e o desempenho do ensaio?",
    "stem": "Um laboratório recebeu amostra de urina de paciente sonolento, com 7 incursões respiratórias por minuto e pupilas puntiformes. A equipe informou exposição possível a analgésico opioide. A triagem imunológica para opiáceos foi negativa; o fabricante informa baixa reatividade do ensaio para fentanila. A confirmação por método específico ainda está em andamento.\n\nQual comunicação do biomédico à equipe assistencial integra os achados e o desempenho do ensaio?",
    "options": [
      "A triagem negativa reduz a suspeita de fentanila; a avaliação de urgência deve priorizar outras causas.",
      "A miose define exposição a fentanila; o método confirmatório deve ser usado para estimar sua dose.",
      "A confirmação analítica determina a urgência; a avaliação respiratória deve ser vinculada ao laudo final.",
      "A baixa frequência respiratória indica efeito sedativo esperado; o resultado negativo favorece a observação.",
      "A triagem tem limitação para fentanila; o risco ventilatório deve ser comunicado antes da confirmação."
    ],
    "answer": 4,
    "rationales": [
      "ERRADA. Um resultado negativo em ensaio com baixa reatividade para fentanila tem limitação para afastar essa exposição; o quadro respiratório mantém relevância imediata.",
      "ERRADA. Miose não identifica uma substância específica e a concentração analítica não equivale, de forma direta, à dose usada.",
      "ERRADA. A urgência decorre também do quadro clínico. Condicioná-la ao término da confirmação pode atrasar a comunicação de um risco já reconhecido.",
      "ERRADA. A frequência respiratória descrita sinaliza risco, não um efeito que possa ser considerado benigno com base em triagem de alcance limitado.",
      "CERTA. A comunicação deve explicitar a limitação analítica e a gravidade ventilatória, sem confundir triagem negativa com exclusão da exposição nem aguardar confirmação para alertar a equipe."
    ],
    "explanation": "A comunicação deve explicitar a limitação analítica e a gravidade ventilatória, sem confundir triagem negativa com exclusão da exposição nem aguardar confirmação para alertar a equipe.",
    "source": "acmt",
    "locator": "Limitações dos imunoensaios e comunicação clínica; situação hipotética autoral.",
    "contextCredit": "Situação hipotética elaborada para este item.",
    "bankVersion": "2026-10-26-INEP"
  },
  {
    "id": "a2",
    "topic": "Aplicação: interação farmacodinâmica",
    "objective": "Analisar contribuição de depressores do SNC para um evento adverso.",
    "cognitive": "Analisar",
    "context": "Na investigação de um evento adverso, o prontuário registrou morfina associada a diazepam. Após a associação, o paciente apresentou sedação acentuada e hipoventilação. Os dados disponíveis não indicaram alteração da função renal nem aumento da concentração de morfina em relação à avaliação anterior.",
    "command": "Qual hipótese deve ser priorizada na análise farmacológica do evento?",
    "stem": "Na investigação de um evento adverso, o prontuário registrou morfina associada a diazepam. Após a associação, o paciente apresentou sedação acentuada e hipoventilação. Os dados disponíveis não indicaram alteração da função renal nem aumento da concentração de morfina em relação à avaliação anterior.\n\nQual hipótese deve ser priorizada na análise farmacológica do evento?",
    "options": [
      "Inibição da eliminação renal da morfina pelo diazepam, com acúmulo de metabólitos ativos.",
      "Indução do metabolismo do diazepam pela morfina, com aumento de sua exposição sistêmica.",
      "Somação de efeitos depressores do SNC, com intensificação do comprometimento ventilatório.",
      "Competição por receptores μ entre os fármacos, com deslocamento da morfina pelo diazepam.",
      "Redução da absorção intestinal da morfina pelo diazepam, com aumento da sedação residual."
    ],
    "answer": 2,
    "rationales": [
      "ERRADA. O caso não fornece evidências de alteração renal ou aumento da exposição à morfina que sustentem essa prioridade.",
      "ERRADA. Indução enzimática tenderia a reduzir a exposição ao substrato e não é a explicação característica da associação descrita.",
      "CERTA. Opioides e benzodiazepínicos podem somar efeitos depressores do SNC. O agravamento sem aumento identificado da morfina favorece a hipótese farmacodinâmica.",
      "ERRADA. O diazepam atua no sistema GABA-A; a interação de risco não depende de competição com a morfina no receptor μ.",
      "ERRADA. Menor absorção da morfina não explica o agravamento respiratório descrito nem a interação farmacodinâmica de interesse."
    ],
    "explanation": "Opioides e benzodiazepínicos podem somar efeitos depressores do SNC. O agravamento sem aumento identificado da morfina favorece a hipótese farmacodinâmica.",
    "source": "fda",
    "locator": "Associação de opioides com benzodiazepínicos.",
    "contextCredit": "Situação hipotética elaborada para este item.",
    "bankVersion": "2026-10-26-INEP"
  },
  {
    "id": "a3",
    "topic": "Aplicação: integração farmacocinética",
    "objective": "Selecionar evidências laboratoriais pertinentes à hipótese de acúmulo de M6G.",
    "cognitive": "Analisar",
    "context": "Uma equipe avalia sonolência crescente em paciente que recebe morfina em esquema estável. A função hepática não apresentou mudança relevante, mas a função renal piorou nas últimas avaliações. O objetivo da análise é investigar a contribuição de acúmulo de morfina-6-glicuronídeo para o evento.",
    "command": "Qual conjunto de informações é mais pertinente à investigação dessa hipótese?",
    "stem": "Uma equipe avalia sonolência crescente em paciente que recebe morfina em esquema estável. A função hepática não apresentou mudança relevante, mas a função renal piorou nas últimas avaliações. O objetivo da análise é investigar a contribuição de acúmulo de morfina-6-glicuronídeo para o evento.\n\nQual conjunto de informações é mais pertinente à investigação dessa hipótese?",
    "options": [
      "Tendência da função renal, cronologia de administração e concentração de M6G por método específico.",
      "Atividade do CYP2D6, cronologia de administração e concentração de morfina por triagem imunológica.",
      "Atividade de transaminases, cronologia da coleta e concentração de codeína por método específico.",
      "Concentração de albumina, frequência de evacuações e presença de miose nas avaliações clínicas.",
      "Intensidade inicial da dor, frequência de evacuações e concentração urinária de creatinina isolada."
    ],
    "answer": 0,
    "rationales": [
      "CERTA. A tendência renal, a exposição temporal e a mensuração específica do metabólito permitem avaliar conjuntamente a hipótese, sem presumir causalidade a partir de um exame isolado.",
      "ERRADA. CYP2D6 é relevante para a bioativação da codeína, mas não é o foco da formação de M6G; uma triagem de morfina não quantifica necessariamente o metabólito alvo.",
      "ERRADA. O painel proposto se afasta da hipótese de acúmulo renal de M6G e inclui codeína, que não é a exposição descrita.",
      "ERRADA. Esses dados podem compor a avaliação geral, mas não investigam diretamente a exposição a M6G e sua relação com a função renal.",
      "ERRADA. A dor e o trânsito intestinal não substituem a avaliação de exposição ao metabólito; creatinina urinária isolada não caracteriza a tendência de filtração renal."
    ],
    "explanation": "A tendência renal, a exposição temporal e a mensuração específica do metabólito permitem avaliar conjuntamente a hipótese, sem presumir causalidade a partir de um exame isolado.",
    "source": "morphine",
    "locator": "Clinical pharmacology; Renal impairment.",
    "contextCredit": "Situação hipotética elaborada para este item.",
    "bankVersion": "2026-10-26-INEP"
  },
  {
    "id": "a4",
    "topic": "Aplicação: retorno de efeitos",
    "objective": "Interpretar recorrência de depressão respiratória após antagonismo inicial.",
    "cognitive": "Analisar",
    "context": "Uma pessoa exposta a opioide de ação prolongada apresentou melhora da ventilação após naloxona administrada pela equipe assistencial. Mais tarde, a sonolência e a hipoventilação retornaram, sem registro de nova exposição. A equipe solicitou apoio para interpretar a evolução temporal.",
    "command": "Qual hipótese farmacológica explica a recorrência descrita?",
    "stem": "Uma pessoa exposta a opioide de ação prolongada apresentou melhora da ventilação após naloxona administrada pela equipe assistencial. Mais tarde, a sonolência e a hipoventilação retornaram, sem registro de nova exposição. A equipe solicitou apoio para interpretar a evolução temporal.\n\nQual hipótese farmacológica explica a recorrência descrita?",
    "options": [
      "Redução progressiva da sensibilidade μ, com reversão do efeito agonista após a melhora inicial.",
      "Aumento da atividade intrínseca da naloxona, com resposta agonista após o antagonismo inicial.",
      "Aumento da ligação do opioide a proteínas, com redução da fração livre após o antagonismo.",
      "Persistência da ação do opioide, com redução do antagonismo à medida que a naloxona é eliminada.",
      "Redução da entrada do opioide no SNC, com maior depressão respiratória após sua redistribuição."
    ],
    "answer": 3,
    "rationales": [
      "ERRADA. Dessensibilização tenderia a reduzir a resposta ao agonista, em vez de explicar o retorno da depressão respiratória.",
      "ERRADA. A naloxona não passa a funcionar como agonista μ por decurso do tempo; a recorrência não é explicada por mudança de atividade intrínseca.",
      "ERRADA. Reduzir a fração livre não é a explicação esperada para retorno de efeitos centrais nesse contexto temporal.",
      "CERTA. Alguns opioides atuam por mais tempo que a naloxona. A redução do antagonismo pode permitir retorno dos efeitos, o que sustenta a necessidade de vigilância assistencial.",
      "ERRADA. Menor entrada no SNC não explica maior depressão respiratória; o dado relevante é a diferença entre as durações do agonista e do antagonista."
    ],
    "explanation": "Alguns opioides atuam por mais tempo que a naloxona. A redução do antagonismo pode permitir retorno dos efeitos, o que sustenta a necessidade de vigilância assistencial.",
    "source": "naloxone",
    "locator": "Warnings; duração relativa do agonista e do antagonista.",
    "contextCredit": "Situação hipotética elaborada para este item.",
    "bankVersion": "2026-10-26-INEP"
  },
  {
    "id": "a5",
    "topic": "Aplicação: dependência física",
    "objective": "Distinguir adaptação fisiológica de transtorno por uso de opioides.",
    "cognitive": "Analisar",
    "context": "Após interrupção abrupta de um opioide usado regularmente para dor, uma pessoa apresentou sudorese, rinorreia e diarreia. Os registros disponíveis descrevem adesão ao tratamento e não documentam perda de controle, uso compulsivo ou prejuízos decorrentes da busca da substância.",
    "command": "Qual conclusão é sustentada pelos dados apresentados?",
    "stem": "Após interrupção abrupta de um opioide usado regularmente para dor, uma pessoa apresentou sudorese, rinorreia e diarreia. Os registros disponíveis descrevem adesão ao tratamento e não documentam perda de controle, uso compulsivo ou prejuízos decorrentes da busca da substância.\n\nQual conclusão é sustentada pelos dados apresentados?",
    "options": [
      "Há evidência de tolerância analgésica, pois os sinais surgiram após a retirada do medicamento.",
      "Há evidência de dependência física, sem dados suficientes para caracterizar transtorno por uso.",
      "Há evidência de intoxicação aguda, pois os sinais indicam amplificação dos efeitos opioides.",
      "Há evidência de hiperalgesia induzida, pois a interrupção revelou sensibilização nociceptiva.",
      "Há evidência de transtorno por uso, pois a abstinência demonstra comportamento compulsivo."
    ],
    "answer": 1,
    "rationales": [
      "ERRADA. Tolerância envolve alteração da resposta durante a exposição. A ocorrência de sinais após retirada caracteriza outro fenômeno e não demonstra tolerância analgésica.",
      "CERTA. A abstinência após interrupção de uso regular sustenta dependência física. O diagnóstico de transtorno por uso exige avaliação adicional, incluindo critérios não demonstrados nesse relato.",
      "ERRADA. Os sinais após retirada são compatíveis com abstinência, e não com intensificação dos efeitos durante intoxicação.",
      "ERRADA. O caso não descreve aumento de sensibilidade à dor que estabeleça hiperalgesia; predomina um conjunto de sinais autonômicos e intestinais de retirada.",
      "ERRADA. Abstinência não demonstra compulsão. A alternativa confunde adaptação fisiológica com um diagnóstico que requer critérios adicionais."
    ],
    "explanation": "A abstinência após interrupção de uso regular sustenta dependência física. O diagnóstico de transtorno por uso exige avaliação adicional, incluindo critérios não demonstrados nesse relato.",
    "source": "goodman",
    "locator": "p. 520, tolerância e dependência física.",
    "contextCredit": "Situação hipotética elaborada para este item.",
    "bankVersion": "2026-10-26-INEP"
  },
  {
    "id": "a6",
    "topic": "Aplicação: potência e eficácia",
    "objective": "Analisar curvas concentração-resposta sem extrapolar conclusões de segurança.",
    "cognitive": "Analisar",
    "context": "Em um ensaio no mesmo sistema de receptores μ, dois agonistas atingiram o mesmo efeito analgésico máximo. Para produzir metade desse efeito, o composto X exigiu concentração menor que o composto Y. O experimento não avaliou depressão respiratória nem outros eventos adversos.",
    "command": "Qual conclusão pode ser incorporada ao relatório desse ensaio?",
    "stem": "Em um ensaio no mesmo sistema de receptores μ, dois agonistas atingiram o mesmo efeito analgésico máximo. Para produzir metade desse efeito, o composto X exigiu concentração menor que o composto Y. O experimento não avaliou depressão respiratória nem outros eventos adversos.\n\nQual conclusão pode ser incorporada ao relatório desse ensaio?",
    "options": [
      "X apresentou maior eficácia máxima, com segurança equivalente à observada para Y.",
      "X apresentou menor potência, com eficácia máxima equivalente à observada para Y.",
      "X apresentou maior potência, com eficácia máxima equivalente à observada para Y.",
      "X apresentou maior afinidade, com menor depressão respiratória em comparação com Y.",
      "X apresentou maior margem de segurança, com maior efeito máximo em comparação com Y."
    ],
    "answer": 2,
    "rationales": [
      "ERRADA. Os máximos foram iguais; o ensaio não investigou eventos adversos para comparar segurança.",
      "ERRADA. Necessitar de concentração menor para um efeito de mesma magnitude indica maior, e não menor, potência.",
      "CERTA. O menor valor de concentração para metade do efeito máximo indica maior potência no sistema avaliado. Os máximos iguais sustentam eficácia máxima equivalente nesse ensaio.",
      "ERRADA. A curva funcional não fornece, isoladamente, uma medida direta de afinidade, e a depressão respiratória não foi avaliada.",
      "ERRADA. Margem de segurança exige dados sobre efeitos tóxicos e terapêuticos. Além disso, o efeito máximo não foi maior para X."
    ],
    "explanation": "O menor valor de concentração para metade do efeito máximo indica maior potência no sistema avaliado. Os máximos iguais sustentam eficácia máxima equivalente nesse ensaio.",
    "source": "clark",
    "locator": "p. 170-175; fundamentos de curvas concentração-resposta.",
    "contextCredit": "Situação hipotética elaborada para este item.",
    "bankVersion": "2026-10-26-INEP"
  }
];
export const deck=[
  {
    "title": "Corrida dos receptores",
    "text": "Analgésicos opioides · Biomedicina",
    "detail": "Uma missão de Team Based Learning: decida sozinho, argumente com sua equipe e aplique a farmacologia."
  },
  {
    "title": "Antes da largada",
    "text": "Prepare-se com os materiais da disciplina",
    "detail": "Objetivos: relacionar receptores e sinalização; interpretar efeitos adversos; integrar farmacocinética, farmacogenética e toxicologia. Sugestão: leitura prévia. Entre com seu nome e faça o iRAT. Depois, o professor formará equipes de 4 a 6 estudantes na mesma sala."
  },
  {
    "title": "Primeiro, sua decisão",
    "text": "10 questões individuais · iRAT",
    "detail": "Cada aluno responde no próprio celular. Vale 100 pontos por acerto, sem bônus de velocidade. O gabarito fica reservado até a etapa em equipe para preservar a discussão."
  },
  {
    "title": "Agora, defendam uma resposta",
    "text": "As mesmas 10 questões · tRAT",
    "detail": "Discutam e o capitão envia o consenso. Acerto na 1ª tentativa vale 100; na 2ª, 50; na 3ª, 25; na 4ª e na 5ª, 0. O professor revela a justificativa após encerrar a questão."
  },
  {
    "title": "O mesmo problema para todos",
    "text": "6 desafios de aplicação · 4S",
    "detail": "Problemas relevantes, iguais para todas as equipes, escolha específica e revelação simultânea. Cada decisão correta vale 200 pontos para a equipe. Defendam a escolha antes do comentário do professor."
  },
  {
    "title": "Um erro é um tropeço",
    "text": "A corrida continua",
    "detail": "O personagem tropeça quando o erro é revelado e volta à pista. Ninguém é eliminado e pontos conquistados não são retirados. O prêmio é simbólico. Use seu nome e respeite o ritmo da turma. O campeão individual é quem soma mais pontos próprios e coletivos; sua equipe aparece no resultado."
  }
];
export const roundAt=i=>!Number.isInteger(i)||i<0||i>25?null:i<10?{phase:'individual',q:readiness[i],number:i+1,total:10}:i<20?{phase:'team',q:readiness[i-10],number:i-9,total:10}:{phase:'application',q:application[i-20],number:i-19,total:6};
