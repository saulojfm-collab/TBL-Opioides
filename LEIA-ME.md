# Opioide Race: TBL para Biomedicina

Aplicação HTML responsiva com servidor Node.js, preparada para um Web Service no Render. Não basta abrir o index.html: o servidor compartilha o estado da sala entre os celulares e o professor. Atualização automática a cada 1,5 segundo enquanto houver conexão.

## Publicação no Render

1. Coloque o conteúdo desta pasta em um repositório GitHub seu, mantendo `render.yaml` na raiz.
2. No Render, escolha **New → Blueprint**, conecte o repositório e confira o serviço `opioide-race-tbl`.
3. Defina `HOST_PASSWORD` com uma senha exclusiva do professor. Não coloque essa senha no repositório nem no link dos alunos.
4. Confira o plano exibido pelo Render e publique. O arquivo usa `plan: free`, sem provisionar banco ou disco pago.
5. Abra o endereço HTTPS fornecido pelo Render. Escolha **Sou professor**, informe a senha e crie a sala.
6. Copie o link dos alunos. Nos celulares, eles entram com código, nome e personagem. As equipes só são formadas depois da rodada individual. O endereço localhost da prévia não funciona nos celulares pela internet.

Configuração manual alternativa: Web Service, runtime Node, Build Command `npm run build`, Start Command `npm start`, Health Check `/health`, variável `HOST_PASSWORD`, Node 22 ou superior. O servidor usa `PORT` fornecida pelo Render e escuta em `0.0.0.0`.

**Persistência:** por padrão, as salas ficam em `data/rooms.json`. O sistema retoma as salas após reinício do processo se o arquivo persistir, mas o sistema de arquivos gratuito do Render é efêmero. Redeploy, substituição de instância e outros eventos podem apagar as salas. Exporte o CSV ao concluir e não publique mudanças durante a aula. Para retenção entre implantações, configure um serviço compatível com disco persistente, monte-o em `/var/data` e defina `DATA_DIR=/var/data`. Isso pode gerar cobrança: escolha conscientemente no Render. Mantenha uma única instância, pois o estado é coordenado por um único processo.

Referências de hospedagem: [Web Services](https://render.com/docs/web-services), [Blueprint](https://render.com/docs/blueprint-spec), [discos persistentes](https://render.com/docs/disks), [limitações de serviços gratuitos](https://render.com/docs/free).

## Roteiro da aula (aproximadamente 70–100 minutos)

- Antes: disponibilize os materiais e peça leitura prévia. Planeje equipes de 4–6 estudantes, mas forme os grupos somente depois do iRAT. A criação da sala não exige definir equipes.
- Apresentação: use os seis quadros de briefing. Todos entram antes da largada. A entrada de novos participantes fica encerrada quando o iRAT começa; participantes já inscritos podem reconectar.
- iRAT: 10 questões, uma resposta individual por aluno, 100 pontos por acerto. Após encerrar, avance. Não há revelação de gabarito nesta etapa.
- Formação das equipes: ao encerrar a décima questão individual, clique em **Formar equipes**. Escolha de 2 a 12 equipes e use **Sortear equipes equilibradas**, ou **Criar equipes vazias** e atribua cada aluno na tabela. O primeiro integrante vira capitão por padrão e pode ser substituído. Todos os alunos precisam de equipe antes de clicar em **Iniciar tRAT**. Eles continuam no mesmo celular e na mesma sala, sem novo cadastro. As respostas individuais permanecem vinculadas ao identificador original e ao nome do aluno.
- tRAT: as mesmas 10 questões, discutidas em equipe. O capitão envia o consenso. Vale 100/50/25/0/0 conforme a tentativa de acerto. O professor pode designar outro capitão na lista de participantes.
- Aplicação: seis problemas comuns a todas as equipes. O capitão pode registrar um argumento antes de confirmar a alternativa. Uma resposta por equipe, valendo 200 pontos. Encerre, peça defesa oral e revele simultaneamente.
- Apelação: antes de avançar, conduza discussão com justificativa e consulta às fontes. O aplicativo não altera notas por apelação nem oferece edição manual de pontuação.
- Fechamento: discuta os mecanismos que geraram mais erros e exporte o CSV.

O professor pode encerrar antecipadamente ou acrescentar 30 segundos. O servidor recusa respostas após o prazo. Acrescentar tempo reabre uma questão encerrada que ainda não foi revelada. O tempo inicial é o mesmo para todas as questões, com opções entre 60 e 300 segundos na interface.

## Corrida e pontuação

Cada aluno escolhe Mario, Luigi, Peach, Toad, Yoshi ou Bowser, em representações simples de pixel art. Personagens podem se repetir. O aluno toca na alternativa e toca novamente para confirmar. Não há bônus de velocidade. Erros geram tropeços e acertos, saltos, quando o resultado é divulgado; no tRAT o erro é sinalizado a cada tentativa. Ninguém é eliminado nem perde pontos anteriores.

Máximo individual: 3.200 = 1.000 de iRAT + 1.000 de tRAT + 1.200 de aplicação. Todos os integrantes recebem os mesmos pontos coletivos da sua equipe, sem substituir seus resultados individuais. O ranking de equipes conta apenas os 2.200 pontos coletivos para não favorecer equipes maiores. Empates compartilham a colocação, sem desempate por velocidade.

No encerramento, o destaque **Aluno campeão da corrida** mostra o nome, o personagem, a equipe, os pontos individuais, os coletivos e o total. A maior soma individual + coletiva define o campeão. Em caso de empate na maior soma, todos recebem o título. O ranking detalhado e o CSV incluem posição e identificação de campeão.

O professor vê pontuação e distribuição atualizadas durante as respostas. Os alunos veem apenas pontos já revelados. Na tela de projeção, a corrida usa os pontos revelados e o gabarito reservado fica oculto. Os controles completos ficam no painel lateral fora da projeção; use **Sair da projeção** para voltar. Durante o iRAT, mantenha o painel do professor fora da vista dos alunos. Um único monitor não permite, ao mesmo tempo, exibir controles privados e uma tela pública separada.

## Retomar e exportar

O acesso da sala fica salvo neste navegador. Professor e aluno devem usar o mesmo dispositivo e navegador para retomar. Não apague os dados do navegador durante a aula. Em um computador compartilhado, use perfis separados; o aplicativo guarda apenas uma participação por perfil. Para dois alunos no mesmo aparelho, use perfis diferentes. O servidor aceita até 200 inscritos por sala, mas a capacidade real simultânea do serviço precisa ser validada no plano escolhido.

O CSV contém nome, totais, equipe, personagem, posição, indicação de campeão, alternativas tentadas e justificativas. O professor pode apagar a sala ao terminar. Não há recuperação administrativa de tokens, autenticação institucional, lista de presença oficial ou integração com prontuário. Os nomes e a pontuação aparecem no placar da turma; compartilhe o código apenas com os participantes.

## Materiais utilizados

- Clark e colaboradores. **Farmacologia Ilustrada**, 5ª ed., capítulo 14. Arquivo `analgésicos opioides.pdf`.
- **Goodman & Gilman**, 12ª ed., trechos de Neurofarmacologia. Arquivo `Analgésico opioides goodman.pdf`.
- Trivedi, Shaikh e Gwinnutt. **Farmacologia dos opioides, parte 1**, tutorial WFSA/ATOTW 64, tradução SBA. Arquivo `Artigo Opioides.pdf`.
- Saulo Mendes. **Analgésicos Opioides 2023**. Arquivo PDF da aula.
- **Farmacologia Opioides LM.pptx**: slides em imagem, com conferência visual dos esquemas de mecanismo, farmacocinética e efeitos sistêmicos.

As 16 questões são autorais; dez são repetidas no tRAT, totalizando 26 rodadas. As justificativas trazem fonte e localizador. Os materiais originais não são redistribuídos no pacote. Não foram reproduzidas recomendações posológicas ou afirmações clínicas absolutas antigas dos materiais. O foco é farmacologia para Biomedicina, interpretação e comunicação de achados, sem prescrição.

## Executar localmente

Requer Node.js 22 ou superior, sem instalação de dependências externas.

No PowerShell, dentro desta pasta:

```powershell
$env:HOST_PASSWORD = 'defina-uma-senha-sua'
npm start
```

Abra `http://localhost:3000`. Para verificar servidor e banco de questões: `npm test`. Para testar com celulares na mesma rede, use o endereço de rede do computador e permita a porta no ambiente de rede apropriado; a publicação HTTPS no Render dispensa esse passo.

## Verificação e limites

Testes automatizados cobrem 26 rodadas com três alunos, inicialmente sem equipe, formação manual e por sorteio após o iRAT, restrições de acesso, preservação das notas individuais, bloqueio de mudança de equipe após início do tRAT, ocultação do gabarito, tentativas repetidas, pontuação, campeão por nome e equipe, exportação e retomada após reinício. Não constituem teste de carga nem validação em uma turma real. A prévia visual no navegador integrado não conseguiu se conectar ao servidor local deste ambiente; confira a interface em computador e celular após a publicação e faça uma sala de ensaio antes da aula.

Projeto didático independente. Mario Bros. e os nomes de personagens pertencem à Nintendo. O aplicativo não usa imagens ou trilhas oficiais. O prêmio é simbólico.

## Revisão dos itens em 26/10/2026

Os 16 itens foram reescritos com situação-base autoral, comando afirmativo, cinco alternativas (A-E), resposta única e justificativas por alternativa. A orientação técnico-pedagógica é o Guia de elaboração e revisão de itens BNI-Enade, 3ª ed., Inep/MEC, 2026, especialmente seções 2.1 e 3.2-3.3. Trata-se de alinhamento editorial e pedagógico, sem certificação ou validação psicométrica pelo Inep. As habilidades registradas são objetivos locais da disciplina, sem correspondência formal declarada com uma matriz de prova do Enade.

O fluxo de 26 rodadas, formação posterior de equipes e campeão pelo total é mantido. Com cinco opções, o tRAT aceita até cinco tentativas, valendo 100, 50, 25, 0 e 0 pontos. Todas as alternativas, incluindo E, integram gráficos, tentativas, comentários e CSV. Os contextos são hipotéticos, criados para os itens. A dificuldade não foi estimada empiricamente. O banco precisa ser aplicado à turma antes de se obterem indicadores de dificuldade e discriminação.
