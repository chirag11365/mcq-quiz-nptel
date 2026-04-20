// Paste the extracted JSON array here. For demonstration, the data is referenced as a const.
const quizData = [
  {"week": "Week 12", "question": "resources are those that exist in the absence of human intervention. [cite: 6]", "options": ["A. Artificial [cite: 8]", "B. Natural [cite: 9]", "C. Fake [cite: 10]", "D. Real [cite: 11]"], "correctAnswer": "B. Natural [cite: 12]", "explanation": "Please go through Lecture notes of Week -12 (Slide No.2) for better understanding [cite: 13]"},
  {"week": "Week 12", "question": "The food sector accounts for around percent of total greenhouse gas emissions. [cite: 15, 16]", "options": ["A. 3 [cite: 17]", "B. 22 [cite: 18]", "C. 100 [cite: 19]", "D. 90 [cite: 20]"], "correctAnswer": "B. 22 [cite: 21]", "explanation": "Please go through Lecture notes of Week -12 (Slide No.3) for better understanding [cite: 22]"},
  {"week": "Week 12", "question": "Which of the following is not a solution for natural resource depletion? [cite: 28]", "options": ["A. use less renewable energy [cite: 29]", "B. promote sustainable fishing growth [cite: 30]", "C. reduce food waste [cite: 31]", "D. treat wastewater before discharging [cite: 32]"], "correctAnswer": "A. use less renewable energy [cite: 33]", "explanation": "Please go through Lecture notes of Week -12 (Slide No.6) for better understanding [cite: 34]"},
  {"week": "Week 12", "question": "In order to support reform on green fiscal policy, UN Environment has established the in partnership with the International Monetary Fund. [cite: 36]", "options": ["A. Green Fiscal Policy Network [cite: 37]", "B. Blue Fiscal Policy Network [cite: 38]", "C. Green Fishery Policy Network [cite: 39]", "D. Green Fiscal Policy Natural [cite: 40]"], "correctAnswer": "A. Green Fiscal Policy Network [cite: 41]", "explanation": "Please go through Lecture notes of Week -12 (Slide No.20) for better understanding [cite: 42]"},
  {"week": "Week 12", "question": "As responsible consumers, we should ask ourselves '' before buying anything. [cite: 48]", "options": ["A. do I really need it? [cite: 49]", "B. how long will I use it? [cite: 50]", "C. can I borrow it from someone I know? [cite: 51]", "D. all of the given [cite: 52]"], "correctAnswer": "D. all of the given [cite: 53]", "explanation": "Please go through Lecture notes of Week -12 (Slide No.21) for better understanding [cite: 54]"},
  {"week": "Week 12", "question": "A bulb thrown out after usage forms [cite: 56]", "options": ["A. wet waste [cite: 57]", "B. valuable waste [cite: 58]", "C. responsible waste [cite: 59]", "D. e-waste [cite: 60]"], "correctAnswer": "D. e-waste [cite: 61]", "explanation": "Please go through Lecture notes of Week -12 (Slide No.29) for better understanding [cite: 62]"},
  {"week": "Week 12", "question": "SDG seeks to promote international trade, and help developing countries increase their exports to ensure a universal rules-based and equitable trading system that is fair, open and beneficial to all. [cite: 68]", "options": ["A. 17 [cite: 69]", "B. 2 [cite: 70]", "C. 6 [cite: 71]", "D. 11 [cite: 72]"], "correctAnswer": "A. 17 [cite: 73]", "explanation": "Please go through Lecture notes of Week -12 (Slide No.36) for better understanding [cite: 74]"},
  {"week": "Week 12", "question": "According to Gandhiji, wealth should be used for [cite: 76]", "options": ["A. the betterment of the humanity [cite: 77]", "B. personal indulgence [cite: 78]", "C. conflicts [cite: 79]", "D. politics [cite: 80]"], "correctAnswer": "A. the betterment of the humanity [cite: 81]", "explanation": "Please go through Lecture notes of Week -12 (Slide No.45) for better understanding [cite: 82]"},
  {"week": "Week 12", "question": "The initiated and spearheaded by Gandhiji is the preeminent prototype of small and cottage industries. Strengthening village economy, and thus, reducing excessive urbanization can make human settlements safe, resilient and sustainable. [cite: 89, 90]", "options": ["A. Khadi Movement [cite: 91]", "B. Salt March [cite: 92]", "C. Cotton Movement [cite: 93]", "D. Non-violent Protest [cite: 94]"], "correctAnswer": "A. Khadi Movement [cite: 95]", "explanation": "Please go through Lecture notes of Week -12 (Slide No.48) for better understanding [cite: 96]"},
  {"week": "Week 12", "question": "is the ability of a system to absorb disturbances & retain its basic function and structure. [cite: 98]", "options": ["A. resilience [cite: 99]", "B. gratitude [cite: 100]", "C. mindfulness [cite: 101]", "D. sustainable consumption [cite: 102]"], "correctAnswer": "A. resilience [cite: 103]", "explanation": "Please go through Lecture notes of Week -12 (Slide No.90) for better understanding [cite: 104]"},
  {"week": "Week 11", "question": "There is one universal curriculum to become a sustainable leader. [cite: 112]", "options": ["A. True [cite: 113]", "B. False [cite: 114]"], "correctAnswer": "B. False [cite: 115]", "explanation": "Please go through Lecture notes of Week -11 (Slide No.2) for better understanding [cite: 116, 117]"},
  {"week": "Week 11", "question": "A sustainable leader has a decision-making style. [cite: 119, 120]", "options": ["A. forceful [cite: 121]", "B. autocratic [cite: 122]", "C. selfish [cite: 123]", "D. consensual [cite: 124]"], "correctAnswer": "D. consensual [cite: 125]", "explanation": "Please go through Lecture notes of Week -11 (Slide No.3) for better understanding [cite: 126]"},
  {"week": "Week 11", "question": "A sustainable leader must have awareness of contexts. [cite: 131, 137]", "options": ["A. ecological [cite: 132]", "B. economic [cite: 133]", "C. political [cite: 134]", "D. all of the given [cite: 135]"], "correctAnswer": "D. all of the given [cite: 136]", "explanation": "Please go through Lecture notes of Week -11 (Slide No.4) for better understanding [cite: 139]"},
  {"week": "Week 11", "question": "The 'results' component of sustainable leadership relates with the dimension. [cite: 141, 147]", "options": ["A. instituional [cite: 142]", "B. social [cite: 143]", "C. environmental [cite: 144]", "D. economic [cite: 145]"], "correctAnswer": "D. economic [cite: 146]", "explanation": "Please go through Lecture notes of Week -11 (Slide No.8) for better understanding [cite: 148]"},
  {"week": "Week 11", "question": "India gives a theory U that consists of aspects like co-initiating, co-sensing and co-evolving among others. [cite: 150]", "options": ["A. HEAD [cite: 151]", "B. SAID [cite: 152]", "C. GEAD [cite: 153]", "D. LEAD [cite: 154]"], "correctAnswer": "D. LEAD [cite: 155]", "explanation": "Please go through Lecture notes of Week -11 (Slide No.14-15) for better understanding [cite: 156]"},
  {"week": "Week 11", "question": "The component in theory 'U' entails prototyping the new. [cite: 159, 162]", "options": ["A. co-evolving [cite: 165]", "B. co-initiating [cite: 166]", "C. co-sensing [cite: 167]", "D. co-creating [cite: 168]"], "correctAnswer": "D. co-creating [cite: 169]", "explanation": "Please go through Lecture notes of Week -11 (Slide No.15) for better understanding [cite: 170]"},
  {"week": "Week 11", "question": "Which of the following factor does not aid in becoming a global leader? [cite: 172]", "options": ["A. willingness to stay in one's comfort zone [cite: 173]", "B. undesirable circumstances like poverty [cite: 174]", "C. confidence to embrace risk [cite: 175]", "D. willingness to learn from failure [cite: 176]"], "correctAnswer": "A. willingness to stay in one's comfort zone [cite: 177]", "explanation": "Please go through Lecture notes of Week -11 (Slide No.17) for better understanding [cite: 178]"},
  {"week": "Week 11", "question": "According to Maxwell, there are levels of leadership. [cite: 184]", "options": ["A. 15 [cite: 186]", "B. 25 [cite: 187]", "C. 50 [cite: 188]", "D. 5 [cite: 189]"], "correctAnswer": "D. 5 [cite: 190]", "explanation": "Please go through Lecture notes of Week -11 (Slide No.21) for better understanding [cite: 191]"},
  {"week": "Week 11", "question": "The in relation to their Global Leadership Fellowship program, describes global leaders as dynamic, engaged and driven individuals who possess a high degree of intellectual curiosity and service-oriented humility; an entrepreneur in the global public interest with a profound sense of purpose regardless of the scale and scope of the challenge. [cite: 193, 194]", "options": ["A. World Health Organization [cite: 195]", "B. World Labor Organization [cite: 195]", "C. World Economic Forum [cite: 195]", "D. World Political Forum [cite: 196]"], "correctAnswer": "C. World Economic Forum [cite: 197]", "explanation": "Please go through Lecture notes of Week -11 (Slide No.24) for better understanding [cite: 198]"},
  {"week": "Week 11", "question": "SDG is to make cities and human settlements inclusive, safe, resilient, and sustainable. [cite: 203]", "options": ["A. 2 [cite: 204]", "B. 10 [cite: 205]", "C. 11 [cite: 206]", "D. 5 [cite: 209]"], "correctAnswer": "C. 11 [cite: 210]", "explanation": "Please go through Lecture notes of Week -11 (Slide No.48) for better understanding [cite: 211]"},
  {"week": "Week 10", "question": "Sustainable leaders look at immediate, short-term gains. [cite: 220]", "options": ["A. True [cite: 221]", "B. False [cite: 222]"], "correctAnswer": "B. False [cite: 223]", "explanation": "Please go through Lecture notes of Week -10 (Slide No.2) for better understanding [cite: 224]"},
  {"week": "Week 10", "question": "The need of the hour is to have leaders who [cite: 226]", "options": ["A. focus only on business profit [cite: 227]", "B. focus only on building technical solutions [cite: 228]", "C. take a holistic approach [cite: 229]", "D. none of the given [cite: 230]"], "correctAnswer": "C. take a holistic approach [cite: 231]", "explanation": "Please go through Lecture notes of Week -10 (Slide No.4) for better understanding [cite: 232]"},
  {"week": "Week 10", "question": "Which of the following is a part of the 3Ps of triple bottom line? [cite: 238]", "options": ["A. Profit [cite: 239]", "B. Passion [cite: 240]", "C. Party [cite: 241]", "D. Pivot [cite: 242]"], "correctAnswer": "A. Profit [cite: 243]", "explanation": "Please go through Lecture notes of Week -10 (Slide No.4) for better understanding [cite: 244]"},
  {"week": "Week 10", "question": "Organizations need leaders who create value for [cite: 246]", "options": ["A. internal stakeholders [cite: 247]", "B. external stakeholders [cite: 248]", "C. oneself [cite: 249]", "D. all stakeholders [cite: 250]"], "correctAnswer": "D. all stakeholders [cite: 251]", "explanation": "Please go through Lecture notes of Week -10 (Slide No.9) for better understanding [cite: 252]"},
  {"week": "Week 10", "question": "The sustainability mindset involves [cite: 254]", "options": ["A. transparency [cite: 255]", "B. presencing [cite: 256]", "C. integrity [cite: 257]", "D. all of the given [cite: 258]"], "correctAnswer": "D. all of the given [cite: 259]", "explanation": "Please go through Lecture notes of Week -10 (Slide No.10) for better understanding [cite: 260]"},
  {"week": "Week 10", "question": "Finding ways to maintain one's own and others' energy is an unsustainable leadership practice. [cite: 266]", "options": ["A. True [cite: 267]", "B. False [cite: 268]"], "correctAnswer": "B. False [cite: 269]", "explanation": "Please go through Lecture notes of Week -10 (Slide No.15) for better understanding [cite: 270]"},
  {"week": "Week 10", "question": "Systems thinking is often highlighted by the ability to [cite: 272]", "options": ["A. zoom in [cite: 273]", "B. zoom out [cite: 274]", "C. zoom in and out [cite: 275]", "D. none of the given [cite: 276]"], "correctAnswer": "C. zoom in and out [cite: 277]", "explanation": "Please go through Lecture notes of Week -10 (Slide No.11) for better understanding [cite: 278]"},
  {"week": "Week 10", "question": "Practicing consciousness awareness includes [cite: 280]", "options": ["A. ignoring self with others [cite: 281]", "B. forgetting about what has happened and moving on [cite: 282]", "C. living in denial [cite: 283]", "D. authentic interactions [cite: 284]"], "correctAnswer": "D. authentic interactions [cite: 285]", "explanation": "Please go through Lecture notes of Week -10 (Slide No.22) for better understanding [cite: 286]"},
  {"week": "Week 10", "question": "Leadership is the last challenge of leadership; of letting go, moving on, and planning for one's own obsolescence. [cite: 292, 293, 294]", "options": ["A. succession [cite: 295]", "B. regression [cite: 296]", "C. formation [cite: 297]", "D. integration [cite: 298]"], "correctAnswer": "A. succession [cite: 299]", "explanation": "Please go through Lecture notes of Week -10 (Slide No.24) for better understanding [cite: 300]"},
  {"week": "Week 10", "question": "leadership is also called missionary leadership and is different from quiet leadership. [cite: 302]", "options": ["A. participative [cite: 303]", "B. servant [cite: 304]", "C. radical [cite: 305]", "D. inspirational [cite: 306]"], "correctAnswer": "C. radical [cite: 307]", "explanation": "Please go through Lecture notes of Week -10 (Slide No.31) for better understanding [cite: 308]"},
  {"week": "Week 9", "question": "Activities like fish bowl discussion help [cite: 316]", "options": ["A. passive thinking [cite: 317]", "B. critical and reflexive thinking [cite: 318]", "C. rote-memory [cite: 319]", "D. all of the given [cite: 320]"], "correctAnswer": "B. critical and reflexive thinking [cite: 321]", "explanation": "Please go through Lecture notes of Week -9 (Slide No.2) for better understanding [cite: 322]"},
  {"week": "Week 9", "question": "Which of the following is not a vision-building exercise? [cite: 324]", "options": ["A. scenario analysis [cite: 325]", "B. classroom teaching [cite: 326]", "C. science fiction thinking [cite: 327]", "D. dystopian storytelling [cite: 328]"], "correctAnswer": "B. classroom teaching [cite: 329]", "explanation": "Please go through Lecture notes of Week -9 (Slide No.2) for better understanding [cite: 330]"},
  {"week": "Week 9", "question": "The ability to hold contradictory thoughts and feelings is an competency. [cite: 336, 342]", "options": ["A. intellectual [cite: 337]", "B. interpersonal [cite: 338]", "C. intrapersonal [cite: 339]", "D. institutional [cite: 340]"], "correctAnswer": "C. intrapersonal [cite: 341]", "explanation": "Please go through Lecture notes of Week -9 (Slide No.4) for better understanding [cite: 343]"},
  {"week": "Week 9", "question": "intelligences is proposed by Howard Gardner. [cite: 345]", "options": ["A. multiple [cite: 346]", "B. singular [cite: 347]", "C. double [cite: 348]", "D. triple [cite: 349]"], "correctAnswer": "A. multiple [cite: 350]", "explanation": "Please go through Lecture notes of Week -9 (Slide No.5) for better understanding [cite: 351]"},
  {"week": "Week 9", "question": "intelligence refers to using one's body in skilled ways. [cite: 353]", "options": ["A. kinesthetic [cite: 354]", "B. musical [cite: 355]", "C. naturalist [cite: 356]", "D. spatial [cite: 357]"], "correctAnswer": "A. kinesthetic [cite: 358]", "explanation": "Please go through Lecture notes of Week -9 (Slide No.7) for better understanding [cite: 359]"},
  {"week": "Week 9", "question": "The idea of big transformation implies that changes in individual action are intertwined with [cite: 366]", "options": ["A. reorganization of self [cite: 367]", "B. reorganization of societal structures [cite: 368]", "C. ignorance of others [cite: 369]", "D. none of the given [cite: 370]"], "correctAnswer": "B. reorganization of societal structures [cite: 371]", "explanation": "Please go through Lecture notes of Week -9 (Slide No.16) for better understanding [cite: 372]"},
  {"week": "Week 9", "question": "In learning, learners start to question all the things they knew to make room for new insights and information. [cite: 374]", "options": ["A. transformative [cite: 375]", "B. transactional [cite: 376]", "C. trivial [cite: 377]", "D. trans-disciplinary [cite: 378]"], "correctAnswer": "A. transformative [cite: 379]", "explanation": "Please go through Lecture notes of Week -9 (Slide No.19) for better understanding [cite: 380]"},
  {"week": "Week 9", "question": "Which of the following is a key principle of adult education? [cite: 386]", "options": ["A. need to know why [cite: 387]", "B. guilt [cite: 388]", "C. boredom [cite: 389]", "D. none of the given [cite: 390]"], "correctAnswer": "A. need to know why [cite: 391]", "explanation": "Please go through Lecture notes of Week -9 (Slide No.24) for better understanding [cite: 392]"},
  {"week": "Week 9", "question": "Sustainable Development is a process through which people influence and share control over development initiatives, decisions and resources that affects them. [cite: 394]", "options": ["A. Internal [cite: 395]", "B. Societal [cite: 396]", "C. Participatory [cite: 397]", "D. Transformational [cite: 398]"], "correctAnswer": "C. Participatory [cite: 399]", "explanation": "Please go through Lecture notes of Week -9 (Slide No.29) for better understanding [cite: 400]"},
  {"week": "Week 9", "question": "is the common regulatory body for higher education in India. [cite: 406]", "options": ["A. HECI [cite: 407]", "B. WHO [cite: 408]", "C. AIIMS [cite: 409]", "D. None of the given [cite: 410]"], "correctAnswer": "A. HECI [cite: 411]", "explanation": "Please go through Lecture notes of Week -9 (Slide No.32) for better understanding [cite: 412]"},
  {"week": "Week 8", "question": "The Okayama Commitment is from [cite: 419]", "options": ["A. Russia [cite: 421]", "B. South Korea [cite: 422]", "C. North Korea [cite: 423]", "D. Japan [cite: 424]"], "correctAnswer": "D. Japan [cite: 425]", "explanation": "Please go through Lecture notes of Week -8 (Slide No.4) for better understanding [cite: 426]"},
  {"week": "Week 8", "question": "Which of the following is a policy support mechanism of Okayama Commitment? [cite: 428]", "options": ["A. Taking money [cite: 429]", "B. Content development [cite: 430]", "C. Exploitation of resources [cite: 431]", "D. None of the given [cite: 432]"], "correctAnswer": "B. Content development [cite: 433]", "explanation": "Please go through Lecture notes of Week -8 (Slide No.5) for better understanding [cite: 434]"},
  {"week": "Week 8", "question": "Education is related to SDG 9 such that [cite: 440]", "options": ["A. education helps in skills required to build resilient infrastructure [cite: 441]", "B. education enhances skills to use natural resources more sustainably [cite: 442]", "C. education is critical to lifting people out of poverty [cite: 443]", "D. education helps reduce gender gaps [cite: 444]"], "correctAnswer": "A. education helps in skills required to build resilient infrastructure [cite: 445]", "explanation": "Please go through Lecture notes of Week -8 (Slide No.6) for better understanding [cite: 445]"},
  {"week": "Week 8", "question": "The frame model structures sustainability competencies into goal dimensions. [cite: 447]", "options": ["A. 8 [cite: 448]", "B. 3 [cite: 449]", "C. 11 [cite: 450]", "D. 45 [cite: 451]"], "correctAnswer": "B. 3 [cite: 452]", "explanation": "Please go through Lecture notes of Week -8 (Slide No.11) for better understanding [cite: 453]"},
  {"week": "Week 8", "question": "Sustainability issues must be looked at through a approach. [cite: 459, 465]", "options": ["A. isolated thinking [cite: 460]", "B. independent thinking [cite: 461]", "C. silos thinking [cite: 462]", "D. systems thinking [cite: 463]"], "correctAnswer": "D. systems thinking [cite: 464]", "explanation": "Please go through Lecture notes of Week -8 (Slide No.29) for better understanding [cite: 466]"},
  {"week": "Week 8", "question": "Technology and Science can alone solve all our sustainability problems. [cite: 468]", "options": ["A. True [cite: 469]", "B. False [cite: 470]"], "correctAnswer": "B. False [cite: 471]", "explanation": "Please go through Lecture notes of Week -8 (Slide No.31) for better understanding [cite: 472]"},
  {"week": "Week 8", "question": "GAP in the context of ESD stands for [cite: 478]", "options": ["A. Global Action Programme [cite: 479]", "B. Great Actvity Plan [cite: 480]", "C. Global Attention Programme [cite: 481]", "D. Great Action Policy [cite: 482]"], "correctAnswer": "A. Global Action Programme [cite: 483]", "explanation": "Please go through Lecture notes of Week -8 (Slide No.32) for better understanding [cite: 484]"},
  {"week": "Week 8", "question": "competency is the ability to understand and evaluate multiple futures. [cite: 486]", "options": ["A. anticipatory [cite: 487]", "B. normative [cite: 488]", "C. strategic [cite: 489]", "D. collaborative [cite: 490]"], "correctAnswer": "A. anticipatory [cite: 491]", "explanation": "Please go through Lecture notes of Week -8 (Slide No.33) for better understanding [cite: 492]"},
  {"week": "Week 8", "question": "The ability to question norms is competency. [cite: 498]", "options": ["A. critical thinking [cite: 499]", "B. normative [cite: 500]", "C. anticipatory [cite: 501]", "D. self-awareness [cite: 502]"], "correctAnswer": "A. critical thinking [cite: 503]", "explanation": "Please go through Lecture notes of Week -8 (Slide No.34) for better understanding [cite: 504]"},
  {"week": "Week 8", "question": "Action-oriented learning draws on Kolb's concept of [cite: 506]", "options": ["A. experiential learning [cite: 507]", "B. experimental learning [cite: 508]", "C. rote learning [cite: 509]", "D. direct learning [cite: 510]"], "correctAnswer": "A. experiential learning [cite: 511]", "explanation": "Please go through Lecture notes of Week -8 (Slide No.40) for better understanding [cite: 512]"},
  {"week": "Week 7", "question": "Which of the following is a type of energy? [cite: 520]", "options": ["A. fossil fuels [cite: 521]", "B. nuclear power [cite: 522]", "C. traditional biomass [cite: 523]", "D. all of the given [cite: 524]"], "correctAnswer": "D. all of the given [cite: 525]", "explanation": "Please go through Lecture notes of Week -7 (Slide No.2) for better understanding [cite: 526]"},
  {"week": "Week 7", "question": "In IPCC by UN, I stands for [cite: 528]", "options": ["A. Industrial [cite: 529]", "B. Internal [cite: 530]", "C. International [cite: 531]", "D. Intergovernmental [cite: 532]"], "correctAnswer": "D. Intergovernmental [cite: 533]", "explanation": "Please go through Lecture notes of Week -7 (Slide No.3) for better understanding [cite: 534]"},
  {"week": "Week 7", "question": "The extraction, transport and refinement of nuclear fuels results in [cite: 539]", "options": ["A. improvement of land from mining [cite: 540]", "B. pollution of air and water [cite: 541]", "C. replenishment of biodiversity [cite: 542]", "D. all of the given [cite: 542]"], "correctAnswer": "B. pollution of air and water [cite: 543]", "explanation": "Please go through Lecture notes of Week -7 (Slide No.3) for better understanding [cite: 544]"},
  {"week": "Week 7", "question": "The greatest contributor to air pollution in China is [cite: 546]", "options": ["A. cooking and heating [cite: 547]", "B. coal burning [cite: 548]", "C. transport [cite: 549]", "D. forest burning [cite: 550]"], "correctAnswer": "B. coal burning [cite: 551]", "explanation": "Please go through Lecture notes of Week -7 (Slide No.4) for better understanding [cite: 552]"},
  {"week": "Week 7", "question": "In the wake of tsunami and nuclear disaster following severe earthquake in 2011, a city in Japan set a target for by 2022. [cite: 558, 559]", "options": ["A. hundred net energy [cite: 560]", "B. one net energy [cite: 561]", "C. million net energy [cite: 562]", "D. zero net energy [cite: 563]"], "correctAnswer": "D. zero net energy [cite: 564]", "explanation": "Please go through Lecture notes of Week -7 (Slide No.11) for better understanding [cite: 565]"},
  {"week": "Week 7", "question": "The term 'energy democracy' grew out of the movement. [cite: 567, 573]", "options": ["A. hunger justice [cite: 568]", "B. hunger revolt [cite: 569]", "C. climate revolt [cite: 570]", "D. climate justice [cite: 571]"], "correctAnswer": "D. climate justice [cite: 572]", "explanation": "Please go through Lecture notes of Week -7 (Slide No.12) for better understanding [cite: 574]"},
  {"week": "Week 7", "question": "The Paris Agreement is a legally binding treaty on adopted by 196 parties at COP 21 in 2015. [cite: 581, 582]", "options": ["A. climate change [cite: 583]", "B. education [cite: 584]", "C. poverty [cite: 585]", "D. none of the given [cite: 586]"], "correctAnswer": "A. climate change [cite: 587]", "explanation": "Please go through Lecture notes of Week -7 (Slide No.27) for better understanding [cite: 588]"},
  {"week": "Week 7", "question": "The Government of India launched the NAPCC in 2008 outlining National Missions on climate change. [cite: 590, 591]", "options": ["A. 8 [cite: 593]", "B. 2 [cite: 594]", "C. 100 [cite: 595]", "D. 78 [cite: 596]"], "correctAnswer": "A. 8 [cite: 597]", "explanation": "Please go through Lecture notes of Week -7 (Slide No.37) for better understanding [cite: 598]"},
  {"week": "Week 7", "question": "Stubble burning usually takes place in the months of [cite: 604]", "options": ["A. October-November [cite: 605]", "B. May-June [cite: 606]", "C. January-February [cite: 607]", "D. July-August [cite: 608]"], "correctAnswer": "A. October-November [cite: 609]", "explanation": "Please go through Lecture notes of Week -7 (Slide No.56) for better understanding [cite: 610]"},
  {"week": "Week 7", "question": "Stubble burning is [cite: 612]", "options": ["A. intentional [cite: 613]", "B. natural [cite: 614]", "C. healthy for air quality [cite: 615]", "D. related to burning of paper [cite: 616]"], "correctAnswer": "A. intentional [cite: 617]", "explanation": "Please go through Lecture notes of Week -7 (Slide No.56) for better understanding [cite: 618]"},
  {"week": "Week 6", "question": "Poor infrastructure can cause hunger in a country. [cite: 625]", "options": ["A. True [cite: 627]", "B. False [cite: 628]"], "correctAnswer": "A. True [cite: 629]", "explanation": "Please go through Lecture notes of Week -6 (Slide No.2) for better understanding [cite: 630]"},
  {"week": "Week 6", "question": "In high income countries, hunger is mainly caused due to poverty that results from [cite: 632]", "options": ["A. low GDP of the country [cite: 633]", "B. lack of access to food [cite: 634]", "C. poor public transport infrastructure [cite: 635]", "D. lack of jobs [cite: 636]"], "correctAnswer": "D. lack of jobs [cite: 637]", "explanation": "Please go through Lecture notes of Week -6 (Slide No.4) for better understanding [cite: 638]"},
  {"week": "Week 6", "question": "Which of the following is true about hunger? [cite: 643]", "options": ["A. It is a cause of war [cite: 645]", "B. It is an effect of war [cite: 646]", "C. It is both a cause and effect of war [cite: 647]", "D. It is neither a cause nor an effect of war [cite: 648]"], "correctAnswer": "C. It is both a cause and effect of war [cite: 649]", "explanation": "Please go through Lecture notes of Week -6 (Slide No.5) for better understanding [cite: 650]"},
  {"week": "Week 6", "question": "are most vulnerable to the harmful effects of hidden hunger. [cite: 653]", "options": ["A. adults [cite: 654]", "B. infants [cite: 655]", "C. adolescents [cite: 656]", "D. elderly [cite: 657]"], "correctAnswer": "B. infants [cite: 658]", "explanation": "Please go through Lecture notes of Week -6 (Slide No.8) for better understanding [cite: 659]"},
  {"week": "Week 6", "question": "Desertification is typically a result of [cite: 666]", "options": ["A. drought [cite: 667]", "B. deforestation [cite: 668]", "C. inappropriate agriculture [cite: 669]", "D. all of the given [cite: 670]"], "correctAnswer": "D. all of the given [cite: 671]", "explanation": "Please go through Lecture notes of Week -6 (Slide No.8-10) for better understanding [cite: 672]"},
  {"week": "Week 6", "question": "Which of the following is a key initiative in India for the problem of hunger? [cite: 674]", "options": ["A. One Nation, One Plate [cite: 675]", "B. One Nation, One Hunger [cite: 676]", "C. One Nation, No Ration Card [cite: 677]", "D. One Nation, One Ration Card [cite: 678]"], "correctAnswer": "D. One Nation, One Ration Card [cite: 679]", "explanation": "Please go through Lecture notes of Week -6 (Slide No.10) for better understanding [cite: 680]"},
  {"week": "Week 6", "question": "In the past, MGNREGA has [cite: 687]", "options": ["A. decreased rural wages [cite: 688]", "B. increased gender wage gaps [cite: 689]", "C. enabled poor access to food [cite: 690]", "D. reduced distress migration from rural areas [cite: 691]"], "correctAnswer": "D. reduced distress migration from rural areas [cite: 692]", "explanation": "Please go through Lecture notes of Week -6 (Slide No.14) for better understanding [cite: 693]"},
  {"week": "Week 6", "question": "Wheat productivity can suffer if [cite: 695]", "options": ["A. temperature rises [cite: 696]", "B. temperature does not change [cite: 697]", "C. temperature falls [cite: 698]", "D. none of the given [cite: 699]"], "correctAnswer": "A. temperature rises [cite: 700]", "explanation": "Please go through Lecture notes of Week -6 (Slide No.17) for better understanding [cite: 701]"},
  {"week": "Week 6", "question": "Bringing forgotten and neglected foods like yam into cultivation and onto the market is called [cite: 708]", "options": ["A. diversifying food basket [cite: 709]", "B. restricting food basket [cite: 710]", "C. completing food box [cite: 711]", "D. wasting food basket [cite: 712]"], "correctAnswer": "A. diversifying food basket [cite: 713]", "explanation": "Please go through Lecture notes of Week -6 (Slide No.17) for better understanding [cite: 714]"},
  {"week": "Week 6", "question": "Home gardening has been proven as a reliable source to supplement food and nutritional security at the household level. [cite: 716]", "options": ["A. True [cite: 717]", "B. False [cite: 718]"], "correctAnswer": "A. True [cite: 719]", "explanation": "Please go through Lecture notes of Week -6 (Slide No.23) for better understanding [cite: 720]"},
  {"week": "Week 5", "question": "Siddha comes under the [cite: 728]", "options": ["A. public health sector [cite: 729]", "B. voluntary health agencies [cite: 730]", "C. indigenous system of medicine [cite: 731]", "D. private health sector [cite: 732]"], "correctAnswer": "C. indigenous system of medicine [cite: 733]", "explanation": "Please go through Lecture notes of Week -5 (Slide No.2) for better understanding [cite: 734]"},
  {"week": "Week 5", "question": "Which of the following is not a problem of healthcare infrastructure in India? [cite: 736]", "options": ["A. shortage of staff [cite: 737]", "B. skewed favor to urban areas [cite: 738]", "C. no proper regulatory mechanism [cite: 739]", "D. standard procedures in all regions [cite: 740]"], "correctAnswer": "D. standard procedures in all regions [cite: 741]", "explanation": "Please go through Lecture notes of Week -5 (Slide No.3) for better understanding [cite: 742]"},
  {"week": "Week 5", "question": "Which of the following is a health system building block as suggested by WHO? [cite: 749]", "options": ["A. Economic growth [cite: 750]", "B. Access to public transport [cite: 751]", "C. Politics [cite: 752]", "D. Service delivery [cite: 753]"], "correctAnswer": "D. Service delivery [cite: 754]", "explanation": "Please go through Lecture notes of Week -5 (Slide No.4) for better understanding [cite: 755]"},
  {"week": "Week 5", "question": "An ecologically sustainable approach broadens the definition of [cite: 757]", "options": ["A. objective [cite: 758]", "B. outcome [cite: 759]", "C. cost [cite: 760]", "D. value [cite: 761]"], "correctAnswer": "D. value [cite: 762]", "explanation": "Please go through Lecture notes of Week -5 (Slide No.9) for better understanding [cite: 763]"},
  {"week": "Week 5", "question": "A is an environment in which data of medical interest can be stored and made easily available. [cite: 770]", "options": ["A. health repository [cite: 771]", "B. health bank [cite: 772]", "C. health bag [cite: 773]", "D. health grid [cite: 774]"], "correctAnswer": "D. health grid [cite: 775]", "explanation": "Please go through Lecture notes of Week -5 (Slide No.10) for better understanding [cite: 776]"},
  {"week": "Week 5", "question": "The POSHAN Abhiyan in India aims to improve nutritional outcomes for [cite: 778]", "options": ["A. children [cite: 779]", "B. lactating mothers [cite: 780]", "C. pregnant women [cite: 781]", "D. all of the given [cite: 782]"], "correctAnswer": "D. all of the given [cite: 783]", "explanation": "Please go through Lecture notes of Week -5 (Slide No.15) for better understanding [cite: 784]"},
  {"week": "Week 5", "question": "Sus-QI stands for [cite: 790]", "options": ["A. Sustainable quality improvement [cite: 791]", "B. Sustainable quality improvisation [cite: 791]", "C. Sustainable quantity improvement [cite: 792]", "D. Sustainable quantity improvisation [cite: 792]"], "correctAnswer": "A. Sustainable quality improvement [cite: 793]", "explanation": "Please go through Lecture notes of Week -5 (Slide No.18) for better understanding [cite: 794]"},
  {"week": "Week 5", "question": "Which of the following is not a stage of Sus-QI? [cite: 796]", "options": ["A. set goals [cite: 797]", "B. measure impacts [cite: 798]", "C. design the improvement effort [cite: 799]", "D. ignore the system [cite: 800]"], "correctAnswer": "D. ignore the system [cite: 801]", "explanation": "Please go through Lecture notes of Week -5 (Slide No.18) for better understanding [cite: 802]"},
  {"week": "Week 5", "question": "Food insecurity is measured on the [cite: 808]", "options": ["A. FIES [cite: 809]", "B. FAIS [cite: 810]", "C. FIET [cite: 811]", "D. FAIR [cite: 812]"], "correctAnswer": "A. FIES [cite: 813]", "explanation": "Please go through Lecture notes of Week -5 (Slide No.34) for better understanding [cite: 814]"},
  {"week": "Week 5", "question": "The UN lists levels of food security for any given country. [cite: 816, 822]", "options": ["A. 5 [cite: 817]", "B. 4 [cite: 818]", "C. 3 [cite: 819]", "D. 2 [cite: 820]"], "correctAnswer": "A. 5 [cite: 821]", "explanation": "Please go through Lecture notes of Week -5 (Slide No.35) for better understanding [cite: 823]"},
  {"week": "Week 4", "question": "GESO stands for [cite: 829]", "options": ["A. Green Education for Sustainable Occupation [cite: 831]", "B. Green Enhanced Sustainable Occupation [cite: 832]", "C. Green Enhanced Skills Occupation [cite: 833]", "D. None of the above [cite: 834]"], "correctAnswer": "C. Green Enhanced Skills Occupation [cite: 835]", "explanation": "Please go through Lecture notes of Week -4 (Slide No.7-8) for better understanding [cite: 836]"},
  {"week": "Week 4", "question": "The classification of occupations into GIDO, GESO and GNEO is given by US National Center for [cite: 838]", "options": ["A. G*NET [cite: 839]", "B. A*NET [cite: 840]", "C. I*NET [cite: 841]", "D. O*NET [cite: 842]"], "correctAnswer": "D. O*NET [cite: 843]", "explanation": "Please go through Lecture notes of Week -4 (Slide No.7) for better understanding [cite: 844]"},
  {"week": "Week 4", "question": "The International Framework for Greening TVET consists of the following tiers, except [cite: 850]", "options": ["A. Breaking TVET institutions [cite: 851]", "B. Transforming TVET institutions [cite: 852]", "C. Formulating National Policies [cite: 853]", "D. Forming International Alliance [cite: 853]"], "correctAnswer": "A. Breaking TVET institutions [cite: 854]", "explanation": "Please go through Lecture notes of Week -4 (Slide No.10) for better understanding [cite: 855]"},
  {"week": "Week 4", "question": "Energy, water and waste management comes under the dimension of Greening TVET. [cite: 857, 863]", "options": ["A. Green research [cite: 858]", "B. Green culture [cite: 859]", "C. Green teaching [cite: 860]", "D. Green campus [cite: 861]"], "correctAnswer": "D. Green campus [cite: 862]", "explanation": "Please go through Lecture notes of Week -4 (Slide No.11) for better understanding [cite: 864]"},
  {"week": "Week 4", "question": "Industry-institute interaction is an indicator of [cite: 870]", "options": ["A. green house [cite: 871]", "B. green teaching [cite: 872]", "C. green campus [cite: 873]", "D. green curriculum [cite: 874]"], "correctAnswer": "D. green curriculum [cite: 875]", "explanation": "Please go through Lecture notes of Week -4 (Slide No.14) for better understanding [cite: 876]"},
  {"week": "Week 4", "question": "Sustainable entrepreneurship includes [cite: 878]", "options": ["A. social entrepreneurship [cite: 879]", "B. eco-preneurship [cite: 880]", "C. intra-preneurship [cite: 881]", "D. all of the given [cite: 882]"], "correctAnswer": "D. all of the given [cite: 883]", "explanation": "Please go through Lecture notes of Week -4 (Slide No.18) for better understanding [cite: 884]"},
  {"week": "Week 4", "question": "ESD requires learning methods. [cite: 887, 890]", "options": ["A. participatory [cite: 891]", "B. passive [cite: 892]", "C. rigid [cite: 893]", "D. static [cite: 895]"], "correctAnswer": "A. participatory [cite: 896]", "explanation": "Please go through Lecture notes of Week -4 (Slide No.19) for better understanding [cite: 897]"},
  {"week": "Week 4", "question": "Which of the following is a transversal competency? [cite: 899]", "options": ["A. creativity [cite: 900]", "B. empathy [cite: 901]", "C. systems thinking [cite: 902]", "D. all of the given [cite: 903]"], "correctAnswer": "D. all of the given [cite: 904]", "explanation": "Please go through Lecture notes of Week -4 (Slide No.26) for better understanding [cite: 905]"},
  {"week": "Week 4", "question": "is the ability to create good relationships and adapt to different social situations. [cite: 911]", "options": ["A. emotional fitness [cite: 912]", "B. mental health [cite: 913]", "C. social health [cite: 914]", "D. physical health [cite: 915]"], "correctAnswer": "C. social health [cite: 916]", "explanation": "Please go through Lecture notes of Week -4 (Slide No.38) for better understanding [cite: 917]"},
  {"week": "Week 4", "question": "Sustainable health is [cite: 919]", "options": ["A. a curative approach [cite: 920]", "B. only about the body [cite: 921]", "C. a balance of mind, body and spirit [cite: 922]", "D. only about mental health [cite: 923]"], "correctAnswer": "C. a balance of mind, body and spirit [cite: 924]", "explanation": "Please go through Lecture notes of Week -4 (Slide No.39) for better understanding [cite: 925]"},
  {"week": "Week 3", "question": "Global citizenship is a belief that individuals are members of networks. [cite: 936]", "options": ["A. multiple [cite: 937]", "B. diverse [cite: 938]", "C. local and non-local [cite: 939]", "D. all of the given [cite: 940]"], "correctAnswer": "D. all of the given [cite: 941]", "explanation": "Please go through Lecture notes of Week -3 (Slide No.2) for better understanding [cite: 942]"},
  {"week": "Week 3", "question": "A global citizen [cite: 944]", "options": ["A. is not aware of the wider world [cite: 945]", "B. is confused about their place in the world [cite: 946]", "C. takes an active role in their community [cite: 947]", "D. do not care much about the planet [cite: 948]"], "correctAnswer": "C. takes an active role in their community [cite: 949]", "explanation": "Please go through Lecture notes of Week -3 (Slide No.4) for better understanding [cite: 950]"},
  {"week": "Week 3", "question": "Global citizenship education is based on domains of learning. [cite: 957, 963]", "options": ["A. three [cite: 958]", "B. two [cite: 959]", "C. four [cite: 960]", "D. seven [cite: 961]"], "correctAnswer": "A. three [cite: 962]", "explanation": "Please go through Lecture notes of Week -3 (Slide No.11) for better understanding [cite: 964]"},
  {"week": "Week 3", "question": "is UNESCO's first Categogory 1 education-releated institute in the Asia-Pacific region. [cite: 966, 967, 968]", "options": ["A. MGEIN [cite: 969]", "B. MGIER [cite: 970]", "C. MGIEP [cite: 971]", "D. MGOEL [cite: 972]"], "correctAnswer": "C. MGIEP [cite: 973]", "explanation": "Please go through Lecture notes of Week -3 (Slide No.16) for better understanding [cite: 974]"},
  {"week": "Week 3", "question": "SDG target 4.7 rearticulates a agenda for education. [cite: 976, 982]", "options": ["A. regional [cite: 977]", "B. behavioral [cite: 978]", "C. political [cite: 979]", "D. humanistic [cite: 980]"], "correctAnswer": "D. humanistic [cite: 981]", "explanation": "Please go through Lecture notes of Week -3 (Slide No.16) for better understanding [cite: 983]"},
  {"week": "Week 3", "question": "SEL stands for [cite: 986]", "options": ["A. Sustainable education and learning [cite: 989]", "B. Social and environmental learning [cite: 989]", "C. Social and emotional learning [cite: 989]", "D. Sustainable and economic learning [cite: 989]"], "correctAnswer": "C. Social and emotional learning [cite: 990]", "explanation": "Please go through Lecture notes of Week -3 (Slide No.17) for better understanding [cite: 993]"},
  {"week": "Week 3", "question": "Which of the following is a role taken by a teacher in education for sustainable development? [cite: 994, 995]", "options": ["A. facilitator [cite: 996]", "B. guide [cite: 997]", "C. role model [cite: 998]", "D. all of the given [cite: 999]"], "correctAnswer": "D. all of the given [cite: 1000]", "explanation": "Please go through Lecture notes of Week -3 (Slide No.17) for better understanding [cite: 1001]"},
  {"week": "Week 3", "question": "Target calls for strengthening efforts to protect and safeguard the world's cultural and natural heritage. [cite: 1003, 1004, 1005]", "options": ["A. 9.5 [cite: 1006]", "B. 1.5 [cite: 1007]", "C. 2.3 [cite: 1008]", "D. 11.4 [cite: 1009]"], "correctAnswer": "D. 11.4 [cite: 1010]", "explanation": "Please go through Lecture notes of Week -3 (Slide No.23) for better understanding [cite: 1011]"},
  {"week": "Week 3", "question": "The UNESCO International Centre for Technical and Vocational Education and Training enables in member states. [cite: 1017, 1018, 1023]", "options": ["A. green TVET [cite: 1019]", "B. blue TVET [cite: 1020]", "C. orange TVET [cite: 1021]", "D. white TVET [cite: 1022]"], "correctAnswer": "A. green TVET [cite: 1024]", "explanation": "Please go through Lecture notes of Week -3 (Slide No.42) for better understanding [cite: 1025]"},
  {"week": "Week 3", "question": "Which of the following statements is not true? [cite: 1027]", "options": ["A. green jobs contribute to preserving environmental quality [cite: 1028]", "B. green jobs ensure workers' rights [cite: 1029]", "C. green jobs are only found in the agriculture sector [cite: 1030]", "D. green jobs must be accessible to all [cite: 1031]"], "correctAnswer": "C. green jobs are only found in the agriculture sector [cite: 1032]", "explanation": "Please go through Lecture notes of Week -3 (Slide No.50) for better understanding [cite: 1033]"},
  {
    "week": "Week 2",
    "question": "Which of the following is a characteristic of ESD as described in the framework?",
    "options": ["A. It is not locally relevant", "B. It promotes learning only for children", "C. It is interdisciplinary", "D. It uses only two pedagogical techniques"],
    "correctAnswer": "C. It is interdisciplinary",
    "explanation": "Please go through Lecture notes of Week -2 (Slide No.14) for better understanding"
  },
  {
    "week": "Week 2",
    "question": "The Declaration on the Right to Development (1986) established that everyone is entitled to participate in and enjoy:",
    "options": ["A. only economic and social development", "B. economic, political, psychological and communist development", "C. economic, social, cultural and political development", "D. only cultural development"],
    "correctAnswer": "C. economic, social, cultural and political development",
    "explanation": "Please go through Lecture notes of Week -2 (Slide No.16) for better understanding"
  },
  {
    "week": "Week 2",
    "question": "Text based methods for assessing ESD programs can be improved by using",
    "options": ["A. interpretive methodologies", "B. strict curriculum", "C. only quantitative techniques", "D. only qualitative methods"],
    "correctAnswer": "A. interpretive methodologies",
    "explanation": "Please go through Lecture notes of Week -2 (Slide No.25) for better understanding"
  },
  {
    "week": "Week 2",
    "question": "SDGS are for the following except",
    "options": ["A. people", "B. practice", "C. planet", "D. partnership"],
    "correctAnswer": "B. practice",
    "explanation": "Please go through Lecture notes of Week -2 (Slide No.29) for better understanding"
  },
  {
    "week": "Week 2",
    "question": "Policies like employment and labor rights, care and family leves, and financial regulation are often called the policies.",
    "options": ["A. post-regulation", "B. self-care", "C. forceful", "D. pre-distributive"],
    "correctAnswer": "D. pre-distributive",
    "explanation": "Please go through Lecture notes of Week -2 (Slide No.32) for better understanding"
  },
  {
    "week": "Week 2",
    "question": "Which of the following is involved in the development of the HRE indicator framework to measure progress on national implementation of human rights education.",
    "options": ["A. Danish Institute of Human Rights", "B. The Office of the High Commissioner for Human Rights", "C. Both A and B", "D. Neither A nor B"],
    "correctAnswer": "C. Both A and B",
    "explanation": "Please go through Lecture notes of Week -2 (Slide No.34-35) for better understanding"
  },
  {
    "week": "Week 2",
    "question": "plays a role in peace education.",
    "options": ["A. schools", "B. parents", "C. community", "D. all the given"],
    "correctAnswer": "D. all the given",
    "explanation": "Please go through Lecture notes of Week -2 (Slide No.55) for better understanding"
  },
  {
    "week": "Week 2",
    "question": "The enterprise of education at its most profound level is",
    "options": ["A. discriminatory", "B. selective", "C. restricted", "D. transformative"],
    "correctAnswer": "D. transformative",
    "explanation": "Please go through Lecture notes of Week -2 (Slide No.60) for better understanding"
  },
  {
    "week": "Week 2",
    "question": "UNESCO's World in 2030 survey revealed that respondents see as one of the top global challenges",
    "options": ["A. climate change", "B. hunger", "C. unemployment", "D. mental health"],
    "correctAnswer": "A. climate change",
    "explanation": "Please go through Lecture notes of Week -2 (Slide No.67) for better understanding"
  },
  {
    "week": "Week 2",
    "question": "Education for sustainable development and peace develops people's skills to take actions that improve our quality of life",
    "options": ["A. only now", "B. only for the future", "C. for now and for the future", "D. only for the past"],
    "correctAnswer": "C. for now and for the future",
    "explanation": "Please go through Lecture notes of Week -2 (Slide No.56) for better understanding"
  },
  {
    "week": "Week 1",
    "question": "The Global Goals were adopted by all United Nations member states in as a universal call to action to end poverty, protect the planet and ensure that all people enjoy peace and prosperity by.",
    "options": ["A. 2025, 2080", "B. 2020, 2060", "C. 2012, 2050", "D. 2015, 2030"],
    "correctAnswer": "D. 2015, 2030",
    "explanation": "Please go through Lecture notes of Week -1 (Slide No.10) for better understanding"
  },
  {
    "week": "Week 1",
    "question": "Which of the following is true?",
    "options": ["A. The SDGs are a bold commitment to solely increase the GDP of India", "B. Dealing with climate change has no impact on gender equality", "C. Success in one SDG affects success of the others", "D. Only 14 out of the 17 SDGs are interconnected"],
    "correctAnswer": "C. Success in one SDG affects success of the others",
    "explanation": "Please go through Lecture notes of Week -1 (Slide No.11) for better understanding"
  },
  {
    "week": "Week 1",
    "question": "In June 1992, at the Earth Summit in Rio de Janeiro, Brazil, more than 178 countries adopted",
    "options": ["A. Agenda 21", "B. Millennium Development Goals", "C. Agenda 51", "D. Sustainable Development Goals"],
    "correctAnswer": "A. Agenda 21",
    "explanation": "Please go through Lecture notes of Week -1 (Slide No.15) for better understanding"
  },
  {
    "week": "Week 1",
    "question": "Brundtland Report was released in 1987 by the WCED. WCED stands for",
    "options": ["A. World Commission on Environment Degradation", "B. World Commission on Environment and Development", "C. World Committee on Environmental Depletion", "D. World Commission on Earth Development"],
    "correctAnswer": "B. World Commission on Environment and Development",
    "explanation": "Please go through Lecture notes of Week -1 (Slide No.18) for better understanding"
  },
  {
    "week": "Week 1",
    "question": "Extreme poverty means living on less than a day.",
    "options": ["A. $1.25", "B. $4.25", "C. $10.25", "D. $100.25"],
    "correctAnswer": "A. $1.25",
    "explanation": "Please go through Lecture notes of Week -1 (Slide No.32) for better understanding"
  },
  {
    "week": "Week 1",
    "question": "poverty measures reveal who is poor and how they are poor.",
    "options": ["A. Unidimensional", "B. Bidirectional", "C. Multidimensional", "D. Multidirectional"],
    "correctAnswer": "C. Multidimensional",
    "explanation": "Please go through Lecture notes of Week -1 (Slide No.36) for better understanding"
  },
  {
    "week": "Week 1",
    "question": "SDG 2 aims end all forms of by 2030.",
    "options": ["A. crime", "B. hunger and malnutrition", "C. pollution", "D. drought"],
    "correctAnswer": "B. hunger and malnutrition",
    "explanation": "Please go through Lecture notes of Week -1 (Slide No.39) for better understanding"
  },
  {
    "week": "Week 1",
    "question": "Which of the following is not one of the indicators of the Global Hunder Index?",
    "options": ["A. prevalence of wasting and stunting in children under 5 years", "B. under 5 child mortality rate", "C. proportion of undernourished in the population", "D. proportion of obese people in the population"],
    "correctAnswer": "D. proportion of obese people in the population",
    "explanation": "Please go through Lecture notes of Week -1 (Slide No.40) for better understanding"
  },
  {
    "week": "Week 1",
    "question": "As per Ministry of Housing and Urban Affairs, 135 litre per capita per day (Ipcd) has been suggested as the benchmark for urban water supply. For rural areas, a minimum service delivery of 55 Ipcd has been fixed under",
    "options": ["A. Jal Jeevan Mission", "B. Jal Shakti Mission", "C. Jal Protection Mission", "D. Jal Janta Mission"],
    "correctAnswer": "A. Jal Jeevan Mission",
    "explanation": "Please go through Lecture notes of Week -1 (Slide No.62) for better understanding"
  },
  {
    "week": "Week 1",
    "question": "Forests cover about percent of the Earth's surface",
    "options": ["A. 5", "B. 85", "C. 30", "D. 50"],
    "correctAnswer": "C. 30",
    "explanation": "Please go through Lecture notes of Week -1 (Slide No.107) for better understanding"
  }

];

// App State
let currentQuiz = [];
let currentQuestionIndex = 0;
let userAnswers = {}; // { index: selectedOption }
let timerInterval;
let startTime;

// DOM Elements
const views = {
    home: document.getElementById('home-view'),
    quiz: document.getElementById('quiz-view'),
    result: document.getElementById('result-view')
};

const elements = {
    startBtn: document.getElementById('start-btn'),
    weekSelector: document.getElementById('week-selector'),
    resumeContainer: document.getElementById('resume-container'),
    resumeBtn: document.getElementById('resume-btn'),
    themeToggle: document.getElementById('theme-toggle'),
    
    // Quiz controls
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    weekBadge: document.getElementById('week-badge'),
    progressText: document.getElementById('progress-text'),
    progressFill: document.getElementById('progress-fill'),
    timerText: document.getElementById('timer-text'),
    
    // Action buttons
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    reviewBtn: document.getElementById('review-btn'),
    submitBtn: document.getElementById('submit-btn'),
    
    // Result
    scoreText: document.getElementById('score-text'),
    reviewContainer: document.getElementById('review-container'),
    homeBtn: document.getElementById('home-btn')
};

// Helper function to remove cite tags, remove "A.", "B." prefixes, and trim spaces
function cleanText(text) {
    if (!text) return '';
    return text
        .replace(/\[cite[^\]]*\]/gi, '') // Removes citations
        .replace(/^[A-D]\.\s*/i, '')     // Removes "A. ", "B. ", etc. at the start
        .trim();
}

// Helper function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}
// Dark Mode Toggle
elements.themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Check Local Storage for resumed session
function checkSavedSession() {
    const savedState = localStorage.getItem('esdQuizState');
    if (savedState) {
        elements.resumeContainer.style.display = 'block';
    } else {
        elements.resumeContainer.style.display = 'none';
    }
}
checkSavedSession();

// Switch Views
function showView(viewName) {
    Object.values(views).forEach(v => v.classList.remove('active'));
    views[viewName].classList.add('active');
}

// Start Quiz Logic
// Start Quiz Logic (Updated to shuffle options)
function initializeQuiz(mode) {
    let selectedQuestions = [];

    // 1. Gather the right questions based on the mode
    if (mode === 'all') {
        selectedQuestions = [...quizData];
    } else if (mode === 'random') {
        const shuffled = [...quizData].sort(() => 0.5 - Math.random());
        selectedQuestions = shuffled.slice(0, 20); 
    } else {
        selectedQuestions = quizData.filter(q => q.week === mode);
    }
    
    if (selectedQuestions.length === 0) {
        alert("No questions found for this selection.");
        return;
    }

    // 2. Create a deep copy so we don't permanently alter the main database
    currentQuiz = JSON.parse(JSON.stringify(selectedQuestions));

    // 3. Shuffle the options for every question in this session
    currentQuiz.forEach(q => {
        q.options = shuffleArray(q.options);
    });

    // 4. Reset states and start
    currentQuestionIndex = 0;
    userAnswers = {};
    startTime = Date.now();
    
    startTimer();
    showView('quiz');
    loadQuestion();
    saveState();
}

elements.startBtn.addEventListener('click', () => {
    const mode = elements.weekSelector.value;
    localStorage.removeItem('esdQuizState'); // Clear previous session
    initializeQuiz(mode);
});

// Resume Quiz
elements.resumeBtn.addEventListener('click', () => {
    const savedState = JSON.parse(localStorage.getItem('esdQuizState'));
    if(savedState) {
        currentQuiz = savedState.currentQuiz;
        currentQuestionIndex = savedState.currentQuestionIndex;
        userAnswers = savedState.userAnswers;
        
        // Timer adjustment
        startTime = Date.now() - savedState.timeElapsed;
        startTimer();
        
        showView('quiz');
        loadQuestion();
    }
});

// Timer Functionality
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const mins = String(Math.floor(elapsed / 60)).padStart(2, '0');
        const secs = String(elapsed % 60).padStart(2, '0');
        elements.timerText.innerText = `Time: ${mins}:${secs}`;
        saveState(elapsed * 1000);
    }, 1000);
}

// Load Question
// Load Question (Updated for instant colors)
// Load Question (Updated with aggressive text cleaning)
function loadQuestion() {
    const qData = currentQuiz[currentQuestionIndex];
    
    // Clean the text before showing it
    elements.questionText.innerText = cleanText(qData.question); 
    elements.weekBadge.innerText = qData.week;
    
    elements.progressText.innerText = `Question ${currentQuestionIndex + 1} of ${currentQuiz.length}`;
    elements.progressFill.style.width = `${((currentQuestionIndex + 1) / currentQuiz.length) * 100}%`;
    
    elements.optionsContainer.innerHTML = '';
    
    // Clean the correct answer for accurate matching
    const cleanCorrectAnswer = cleanText(qData.correctAnswer);

    qData.options.forEach(opt => {
        const cleanOpt = cleanText(opt); // Clean the option text
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = cleanOpt; 
        
        // Check if user already answered this to restore red/green color
        if (userAnswers[currentQuestionIndex] === cleanOpt) {
            if (cleanOpt === cleanCorrectAnswer) {
                btn.classList.add('correct-instant');
            } else {
                btn.classList.add('wrong-instant');
            }
        }
        
        // Pass the cleaned text to the selection function
        btn.addEventListener('click', () => selectOption(cleanOpt, btn, cleanCorrectAnswer));
        elements.optionsContainer.appendChild(btn);
    });
    
    elements.prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === currentQuiz.length - 1) {
        elements.nextBtn.style.display = 'none';
        elements.submitBtn.style.display = 'inline-block';
    } else {
        elements.nextBtn.style.display = 'inline-block';
        elements.submitBtn.style.display = 'none';
    }
}

// Select Option (Updated to use the cleaned text for comparison)
function selectOption(selectedOpt, btnElement, cleanCorrectAnswer) {
    userAnswers[currentQuestionIndex] = selectedOpt;
    
    Array.from(elements.optionsContainer.children).forEach(btn => {
        btn.classList.remove('selected', 'correct-instant', 'wrong-instant');
    });
    
    if (selectedOpt === cleanCorrectAnswer) {
        btnElement.classList.add('correct-instant');
    } else {
        btnElement.classList.add('wrong-instant');
    }
    
    saveState();
}

// Navigation
elements.nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

elements.prevBtn.addEventListener('click', () => {
    currentQuestionIndex--;
    loadQuestion();
});

elements.reviewBtn.addEventListener('click', () => {
    const isMarked = userAnswers[currentQuestionIndex + '_review'];
    if(isMarked) {
        delete userAnswers[currentQuestionIndex + '_review'];
        elements.reviewBtn.classList.remove('primary');
        elements.reviewBtn.classList.add('outline');
    } else {
        userAnswers[currentQuestionIndex + '_review'] = true;
        elements.reviewBtn.classList.add('primary');
        elements.reviewBtn.classList.remove('outline');
    }
    saveState();
});

// Save State to LocalStorage
function saveState(elapsedTime = 0) {
    const state = {
        currentQuiz,
        currentQuestionIndex,
        userAnswers,
        timeElapsed: elapsedTime
    };
    localStorage.setItem('esdQuizState', JSON.stringify(state));
}

// Submit Quiz
// Submit Quiz (Updated to calculate score accurately with cleaned text)
elements.submitBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    localStorage.removeItem('esdQuizState'); 
    
    let score = 0;
    elements.reviewContainer.innerHTML = '';
    
    currentQuiz.forEach((q, index) => {
        const userAns = userAnswers[index];
        const cleanCorrect = cleanText(q.correctAnswer);
        const isCorrect = userAns === cleanCorrect;
        
        if (isCorrect) score++;
        
        const cleanQuestion = cleanText(q.question);
        const cleanUser = userAns ? userAns : 'Not Attempted';
        const cleanExp = cleanText(q.explanation);
        
        const reviewHTML = `
            <div class="review-item">
                <h4>${index + 1}. ${cleanQuestion} (${q.week})</h4>
                <p>Your Answer: <span class="${isCorrect ? 'correct-ans' : 'wrong-ans'}">${cleanUser}</span></p>
                ${!isCorrect ? `<p>Correct Answer: <span class="correct-ans">${cleanCorrect}</span></p>` : ''}
                <p class="explanation">Explanation: ${cleanExp}</p>
            </div>
        `;
        elements.reviewContainer.innerHTML += reviewHTML;
    });
    
    elements.scoreText.innerText = `${score} / ${currentQuiz.length}`;
    showView('result');
});

// Return to Home
elements.homeBtn.addEventListener('click', () => {
    showView('home');
    checkSavedSession();
});
