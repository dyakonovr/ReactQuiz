import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questions: {
    test: {
      "easy": {
        "What is the plural form of 'child'?": { "answers": { "children": 1, "childs": 0, "childen": 0, "childies": 0 }, "explanation": "The plural form of 'child' is 'children,' where the 'd' is doubled." },
        "Which word is a synonym for 'happy'?": { "answers": { "Joyful": 1, "Sad": 0, "Angry": 0, "Tired": 0 }, "explanation": "'Joyful' is a synonym for 'happy,' expressing a state of happiness or contentment." },
        "What tense is used to describe actions that happened in the past and are still ongoing?": { "answers": { "Present Perfect": 1, "Past Simple": 0, "Future Continuous": 0, "Past Perfect": 0 }, "explanation": "The Present Perfect tense is used to describe actions that happened in the past and are still ongoing, often using 'have' or 'has' + the past participle." },
        "What is the comparative form of 'good'?": { "answers": { "Better": 1, "Gooder": 0, "Best": 0, "Goodest": 0 }, "explanation": "The comparative form of 'good' is 'better,' used to compare two things." },
        "Which part of speech describes a person, place, thing, or idea?": { "answers": { "Noun": 1, "Verb": 0, "Adjective": 0, "Adverb": 0 }, "explanation": "A 'noun' describes a person, place, thing, or idea, such as 'dog,' 'house,' or 'happiness.'" },
        "What is the past tense of 'go'?": { "answers": { "Went": 1, "Goed": 0, "Gone": 0, "Going": 0 }, "explanation": "'Went' is the past tense of 'go,' used to describe movement from one place to another in the past." },
        "Which punctuation mark is used to separate items in a list?": { "answers": { "Comma": 1, "Period": 0, "Question mark": 0, "Exclamation mark": 0 }, "explanation": "A 'comma' is used to separate items in a list, such as 'apples, oranges, and bananas.'" },
        "What is the opposite of 'big'?": { "answers": { "Small": 1, "Large": 0, "Huge": 0, "Giant": 0 }, "explanation": "'Small' is the opposite of 'big,' describing something of diminutive size." },
        "Which word is an example of a pronoun?": { "answers": { "He": 1, "Jump": 0, "Fast": 0, "Table": 0 }, "explanation": "'He' is an example of a pronoun, used to replace a noun in a sentence, such as 'he' instead of 'John.'" },
        "What is the past participle of 'eat'?": { "answers": { "Eaten": 1, "Ate": 0, "Eating": 0, "Eats": 0 }, "explanation": "'Eaten' is the past participle of 'eat,' used in perfect tenses or passive constructions, such as 'has eaten' or 'was eaten.'" },
        "Which word is a conjunction?": { "answers": { "And": 1, "Happy": 0, "Quickly": 0, "Run": 0 }, "explanation": "'And' is a conjunction, used to join words, phrases, or clauses together, such as 'bread and butter.'" },
        "What is the superlative form of 'far'?": { "answers": { "Farthest": 1, "Farther": 0, "Farest": 0, "Furthest": 0 }, "explanation": "'Farthest' is the superlative form of 'far,' used to describe the greatest distance." },
        "Which word is an adverb?": { "answers": { "Quickly": 1, "Dog": 0, "Blue": 0, "House": 0 }, "explanation": "'Quickly' is an adverb, modifying a verb to describe how an action is performed, such as 'run quickly.'" },
        "What is the plural form of 'mouse'?": { "answers": { "Mice": 1, "Mouses": 0, "Mouseies": 0, "Mices": 0 }, "explanation": "The plural form of 'mouse' is 'mice,' following the irregular pluralization pattern." },
        "Which word is a preposition?": { "answers": { "Under": 1, "Happy": 0, "Run": 0, "Book": 0 }, "explanation": "'Under' is a preposition, indicating location or direction, such as 'under the table' or 'underneath the sky.'" },
        "What is the comparative form of 'bad'?": { "answers": { "Worse": 1, "Badder": 0, "Worst": 0, "Baddest": 0 }, "explanation": "The comparative form of 'bad' is 'worse,' used to compare two things of poor quality." },
        "Which word is an example of an interjection?": { "answers": { "Wow": 1, "Happy": 0, "Slow": 0, "Jump": 0 }, "explanation": "'Wow' is an example of an interjection, expressing a strong emotion or reaction, such as surprise or excitement." },
        "What is the past tense of 'see'?": { "answers": { "Saw": 1, "Seen": 0, "See": 0, "Seeing": 0 }, "explanation": "'Saw' is the past tense of 'see,' used to describe the action of perceiving with the eyes in the past." },
        "Which word is an example of an adjective?": { "answers": { "Blue": 1, "Jump": 0, "Quickly": 0, "Run": 0 }, "explanation": "'Blue' is an example of an adjective, describing a noun or pronoun, such as 'blue sky' or 'blue car.'" },
        "What is the plural form of 'woman'?": { "answers": { "Women": 1, "Womans": 0, "Womanies": 0, "Womens": 0 }, "explanation": "The plural form of 'woman' is 'women,' where the 'e' is added to form the plural." }
      },
      "medium": {
        "What is the difference between 'affect' and 'effect'?": { "answers": { "Affect is a verb, while effect is a noun.": 1, "Effect is a verb, while affect is a noun.": 0, "They have the same meaning.": 0, "Affect and effect are both nouns.": 0 }, "explanation": "The verb 'affect' means to influence or produce a change in something, while the noun 'effect' refers to the result or consequence of that change." },
        "When should you use 'its' and 'it's'?": { "answers": { "Its is a possessive pronoun, while it's is a contraction of 'it is' or 'it has'.": 1, "Its and it's can be used interchangeably.": 0, "It's is a possessive pronoun, while its is a contraction of 'it is' or 'it has'.": 0, "Its and it's have the same meaning.": 0 }, "explanation": "Use 'its' when indicating possession (belonging to 'it'), and use 'it's' as a contraction of 'it is' or 'it has'." },
        "What is the difference between 'fewer' and 'less'?": { "answers": { "Fewer is used with countable nouns, while less is used with uncountable nouns.": 1, "Fewer and less are interchangeable.": 0, "Less is used with countable nouns, while fewer is used with uncountable nouns.": 0, "Fewer and less have the same meaning.": 0 }, "explanation": "Use 'fewer' when referring to a smaller number of countable items, and use 'less' when referring to a smaller amount of uncountable substances or concepts." },
        "What is the correct order of adjectives in English?": { "answers": { "Opinion, size, age, shape, color, origin, material, purpose.": 1, "Size, opinion, age, shape, color, origin, material, purpose.": 0, "Age, size, opinion, shape, color, origin, material, purpose.": 0, "Origin, material, purpose, size, opinion, age, shape, color.": 0 }, "explanation": "The correct order of adjectives in English is: opinion, size, age, shape, color, origin, material, and purpose. For example, 'a beautiful big old round red Italian wooden dining table.'" },
        "What is the difference between 'hear' and 'listen'?": { "answers": { "Hearing is passive, while listening is active.": 1, "Hearing and listening are synonyms.": 0, "Listening is passive, while hearing is active.": 0, "Hearing and listening have the same meaning.": 0 }, "explanation": "'Hearing' refers to the process of perceiving sound with the ears, often involuntarily, while 'listening' involves paying attention to and making an effort to understand the sounds being heard." },
        "What is the subjunctive mood in English?": { "answers": { "The subjunctive mood expresses hypothetical situations, wishes, suggestions, or conditions contrary to fact.": 1, "The subjunctive mood is used to state facts and objective truths.": 0, "The subjunctive mood is used to express past events.": 0, "The subjunctive mood is used only in formal language.": 0 }, "explanation": "The subjunctive mood is used to express hypothetical situations, wishes, suggestions, or conditions contrary to fact. It is often used after verbs like 'wish,' 'recommend,' or 'suggest,' and typically involves the base form of the verb without adding '-s' or '-ed.'" },
        "When do you use 'who' versus 'whom'?": { "answers": { "Who is used as the subject of a sentence or clause, while whom is used as the object.": 1, "Who and whom are interchangeable.": 0, "Whom is used as the subject of a sentence or clause, while who is used as the object.": 0, "Who and whom have the same meaning.": 0 }, "explanation": "Use 'who' when referring to the subject of a sentence or clause (the one doing the action), and use 'whom' when referring to the object of a verb or preposition (the one receiving the action)." },
        "What is the difference between 'lay' and 'lie'?": { "answers": { "Lay requires a direct object and is transitive, while lie does not take a direct object and is intransitive.": 1, "Lay and lie are synonyms.": 0, "Lay is intransitive, while lie is transitive.": 0, "Lay and lie have the same meaning.": 0 }, "explanation": "Use 'lay' when you are putting something down, and it requires a direct object (e.g., 'lay the book on the table'). Use 'lie' when something or someone reclines or remains in a horizontal position without requiring a direct object (e.g., 'lie down and rest')." },
        "What is the difference between 'farther' and 'further'?": { "answers": { "Farther refers to physical distance, while further refers to figurative distance or additional extent.": 1, "Farther and further are interchangeable.": 0, "Farther and further have the same meaning.": 0, "Further refers to physical distance, while farther refers to figurative distance or additional extent.": 0 }, "explanation": "Use 'farther' when referring to physical distance (e.g., 'the store is farther away'), and use 'further' to indicate figurative distance or additional extent (e.g., 'further discussion is needed')." },
        "What is a dangling participle?": { "answers": { "A dangling participle is a word or phrase that modifies a word not clearly stated in the sentence.": 1, "A dangling participle is a type of verb tense.": 0, "A dangling participle is a type of adverb.": 0, "A dangling participle is a type of noun.": 0 }, "explanation": "A dangling participle is a word or phrase that modifies a word not clearly stated in the sentence, leading to confusion or ambiguity. For example, 'Walking down the street, the trees looked beautiful.'" },
        "What is the difference between 'historic' and 'historical'?": { "answers": { "Historic refers to something famous or important in history, while historical refers to something related to history.": 1, "Historic and historical have the same meaning.": 0, "Historical refers to something famous or important in history, while historic refers to something related to history.": 0, "Historic and historical are interchangeable.": 0 }, "explanation": "Use 'historic' to describe something famous or important in history (e.g., 'a historic event'), and use 'historical' to describe something related to history or the past (e.g., 'historical research')." },
        "What is the difference between 'bring' and 'take'?": { "answers": { "Bring implies movement toward the speaker or current location, while take implies movement away from the speaker or current location.": 1, "Bring and take are synonyms.": 0, "Bring and take have the same meaning.": 0, "Bring implies movement away from the speaker or current location, while take implies movement toward the speaker or current location.": 0 }, "explanation": "Use 'bring' when the action involves moving something toward the speaker or the current location (e.g., 'bring me the book'), and use 'take' when the action involves moving something away from the speaker or the current location (e.g., 'take the book to the library')." },
        "What is the difference between 'may' and 'might'?": { "answers": { "May is used to express possibility or permission in the present or future, while might is used to express possibility in the past or present.": 1, "May and might have the same meaning.": 0, "Might is used to express possibility or permission in the present or future, while may is used to express possibility in the past or present.": 0, "May and might are interchangeable.": 0 }, "explanation": "Use 'may' to express possibility or permission in the present or future (e.g., 'she may come later'), and use 'might' to express possibility in the past or present (e.g., 'she might have forgotten')." },
        "What is the difference between 'accept' and 'except'?": { "answers": { "Accept means to receive or agree to something, while except means to exclude or leave out something.": 1, "Accept and except are synonyms.": 0, "Accept means to exclude or leave out something, while except means to receive or agree to something.": 0, "Accept and except have the same meaning.": 0 }, "explanation": "Use 'accept' when receiving or agreeing to something (e.g., 'accept the invitation'), and use 'except' to indicate exclusion or leaving something out (e.g., 'all except one')." },
        "What is the difference between 'each other' and 'one another'?": { "answers": { "Each other is used when referring to two people or things, while one another is used when referring to more than two people or things.": 1, "Each other and one another are interchangeable.": 0, "Each other is used when referring to more than two people or things, while one another is used when referring to two people or things.": 0, "Each other and one another have the same meaning.": 0 }, "explanation": "Use 'each other' when referring to two people or things interacting reciprocally (e.g., 'they love each other'), and use 'one another' when referring to more than two people or things in the same context (e.g., 'they helped one another')." },
        "What is the difference between 'principal' and 'principle'?": { "answers": { "Principal refers to a person or thing of primary importance, while principle refers to a fundamental truth or belief.": 1, "Principal and principle are synonyms.": 0, "Principal refers to a fundamental truth or belief, while principle refers to a person or thing of primary importance.": 0, "Principal and principle have the same meaning.": 0 }, "explanation": "Use 'principal' when referring to a person or thing of primary importance (e.g., 'the school principal'), and use 'principle' to refer to a fundamental truth or belief (e.g., 'he lives by his principles')." },
        "What is the difference between 'who's' and 'whose'?": { "answers": { "Who's is a contraction of 'who is' or 'who has,' while whose is a possessive pronoun.": 1, "Who's and whose are interchangeable.": 0, "Who's is a possessive pronoun, while whose is a contraction of 'who is' or 'who has.'": 0, "Who's and whose have the same meaning.": 0 }, "explanation": "Use 'who's' as a contraction of 'who is' or 'who has' (e.g., 'who's coming to the party?'), and use 'whose' as a possessive pronoun indicating possession or ownership (e.g., 'whose book is this?')." },
        "What is the difference between 'imply' and 'infer'?": { "answers": { "Imply means to suggest or indicate something without explicitly stating it, while infer means to deduce or conclude something based on evidence or reasoning.": 1, "Imply and infer have the same meaning.": 0, "Imply means to deduce or conclude something based on evidence or reasoning, while infer means to suggest or indicate something without explicitly stating it.": 0, "Imply and infer are interchangeable.": 0 }, "explanation": "Use 'imply' when suggesting or indicating something indirectly (e.g., 'his silence implied agreement'), and use 'infer' when deducing or concluding something based on evidence or reasoning (e.g., 'from his silence, we inferred agreement')." }
      },
      "hard": {
        "What is the definition of morphology in linguistics?": { "answers": { "Morphology is the study of the structure and formation of words in a language, including the rules governing word formation and the analysis of word structure.": 1, "Morphology is the study of the sounds of speech.": 0, "Morphology is the study of the meaning of words.": 0, "Morphology is the study of the syntax of sentences.": 0 }, "explanation": "Morphology in linguistics refers to the study of the structure and formation of words in a language. It deals with the rules governing how words are formed, as well as the analysis of word structure." },
        "What are some examples of inflectional and derivational morphemes?": { "answers": { "Inflectional morphemes include suffixes that indicate grammatical categories such as tense, aspect, number, and case, while derivational morphemes include affixes that change the meaning or part of speech of a word.": 1, "Inflectional morphemes include prefixes that change the meaning of a word, while derivational morphemes include suffixes that indicate grammatical categories.": 0, "Inflectional morphemes include affixes that change the part of speech of a word, while derivational morphemes include suffixes that indicate tense and aspect.": 0, "Inflectional morphemes include suffixes that change the meaning of a word, while derivational morphemes include prefixes that indicate grammatical categories.": 0 }, "explanation": "Inflectional morphemes are affixes that are added to a word to indicate grammatical categories such as tense, aspect, number, and case without changing the basic meaning or part of speech of the word. Examples include the plural '-s' in 'cats' and the past tense '-ed' in 'walked.' Derivational morphemes, on the other hand, are affixes that change the meaning or part of speech of a word. Examples include the prefix 'un-' in 'unhappy' and the suffix '-ity' in 'beauty.'" },
        "Explain the concept of grammatical gender and provide examples of languages that exhibit this feature.": { "answers": { "Grammatical gender is a system of noun classification in which nouns are categorized into classes based on inherent characteristics such as biological gender, animacy, or arbitrary assignment, and are marked with corresponding agreement markers on other elements of the sentence. Examples of languages with grammatical gender include Spanish, French, and German.": 1, "Grammatical gender refers to the use of gendered pronouns in a language, such as he, she, and it.": 0, "Grammatical gender is a system of verb conjugation based on the gender of the subject.": 0, "Grammatical gender is a feature of sign languages that indicates the gender of the signer.": 0 }, "explanation": "Grammatical gender is a system of noun classification found in many languages, where nouns are categorized into classes based on inherent characteristics such as biological gender, animacy, or arbitrary assignment. Nouns are marked with corresponding agreement markers on other elements of the sentence, such as adjectives, articles, and pronouns. For example, in Spanish, 'el libro' (the book) is masculine, while 'la mesa' (the table) is feminine." },
        "What is the difference between agglutinative, fusional, and isolating languages?": { "answers": { "Agglutinative languages use affixes to express grammatical relationships in a highly regular and transparent manner, fusional languages fuse multiple grammatical meanings into single affixes, and isolating languages have minimal inflection and rely on word order and context to convey grammatical relationships.": 1, "Agglutinative languages use separate words to express grammatical relationships, fusional languages have minimal inflection, and isolating languages fuse multiple grammatical meanings into single affixes.": 0, "Agglutinative languages have minimal inflection, fusional languages rely on word order and context, and isolating languages use affixes to express grammatical relationships.": 0, "Agglutinative languages fuse multiple grammatical meanings into single affixes, fusional languages use separate words to express grammatical relationships, and isolating languages use affixes in a highly regular and transparent manner.": 0 }, "explanation": "Agglutinative languages use affixes to express grammatical relationships in a highly regular and transparent manner, with each affix typically corresponding to a single grammatical meaning. Fusional languages, on the other hand, fuse multiple grammatical meanings into single affixes, resulting in more complex and less transparent morphology. Isolating languages have minimal inflection and rely on word order and context to convey grammatical relationships, with little to no affixation." },
        "What is the Sapir-Whorf hypothesis and how does it relate to linguistic relativity?": { "answers": { "The Sapir-Whorf hypothesis, also known as linguistic relativity, suggests that language influences thought and perception, shaping our worldview and cognitive processes.": 1, "The Sapir-Whorf hypothesis proposes that language has no influence on thought or perception.": 0, "The Sapir-Whorf hypothesis argues that all languages are fundamentally the same in structure and function.": 0, "The Sapir-Whorf hypothesis suggests that only written language, not spoken language, influences thought and perception.": 0 }, "explanation": "The Sapir-Whorf hypothesis, also known as linguistic relativity, suggests that language influences thought and perception, shaping our worldview and cognitive processes. It proposes that speakers of different languages perceive and think about the world differently due to linguistic differences, with language acting as a lens through which reality is perceived." },
        "What is the difference between synchronic and diachronic linguistics?": { "answers": { "Synchronic linguistics focuses on the study of language at a specific point in time, analyzing the structure and function of a language as it exists in the present, while diachronic linguistics examines the historical development and evolution of a language over time.": 1, "Synchronic linguistics examines the historical development and evolution of a language over time, while diachronic linguistics focuses on the study of language at a specific point in time.": 0, "Synchronic linguistics analyzes the structure and function of a language as it exists in the present, while diachronic linguistics focuses on language change.": 0, "Synchronic linguistics focuses on language change, while diachronic linguistics examines the structure and function of a language as it exists in the present.": 0 }, "explanation": "Synchronic linguistics focuses on the study of language at a specific point in time, analyzing the structure and function of a language as it exists in the present. It does not consider historical development or language change. Diachronic linguistics, on the other hand, examines the historical development and evolution of a language over time, analyzing how languages change and evolve." },
        "What is the concept of linguistic typology and how does it classify languages?": { "answers": { "Linguistic typology is the study of language universals and the classification of languages into typological categories based on shared structural features and patterns of variation.": 1, "Linguistic typology is the study of language variation within a single language family.": 0, "Linguistic typology is the study of language acquisition and development in children.": 0, "Linguistic typology is the study of language change and historical linguistics.": 0 }, "explanation": "Linguistic typology is the study of language universals and the classification of languages into typological categories based on shared structural features and patterns of variation. It aims to identify commonalities and differences across languages, regardless of their genetic relationships." },
        "What are some key differences between head-initial and head-final languages?": { "answers": { "Head-initial languages place the head of a phrase before its modifiers, while head-final languages place the head after its modifiers.": 1, "Head-initial languages place the head of a phrase after its modifiers, while head-final languages place the head before its modifiers.": 0, "Head-initial languages have minimal inflection, while head-final languages rely heavily on inflection.": 0, "Head-initial languages have fewer phonemes than head-final languages.": 0 }, "explanation": "In head-initial languages, the head of a phrase (such as a noun or verb) typically precedes its modifiers (such as adjectives or adverbs). For example, in English, the noun precedes its modifiers (e.g., 'big house'). In head-final languages, the head of a phrase comes after its modifiers. For example, in Japanese, the noun follows its modifiers (e.g., 'ooki na ie')." },
        "Discuss the role of language contact in linguistic change and evolution.": { "answers": { "Language contact refers to the interaction between speakers of different languages, leading to borrowing of vocabulary, grammatical structures, and linguistic features, as well as language change and evolution.": 1, "Language contact refers to the internal changes within a language over time, resulting from shifts in pronunciation, grammar, and vocabulary.": 0, "Language contact refers to the process of language acquisition and development in children.": 0, "Language contact refers to the study of the historical relationships between languages within a language family.": 0 }, "explanation": "Language contact occurs when speakers of different languages interact, leading to the exchange of linguistic features such as vocabulary, grammatical structures, and phonological patterns. This contact can result in borrowing of words or features from one language into another, as well as language change and evolution." },
        "Explain the concept of markedness in linguistics and provide examples.": { "answers": { "Markedness refers to the tendency for certain linguistic forms to be more complex or marked than others, often indicating non-default or less frequent patterns. For example, irregular past tense forms in English, such as 'went' for 'go,' are marked because they deviate from the regular pattern of adding '-ed' to form past tense verbs.": 1, "Markedness refers to the tendency for certain linguistic forms to be simpler or less complex than others, indicating default or more frequent patterns.": 0, "Markedness refers to the process of assigning linguistic labels to sounds and symbols in a writing system.": 0, "Markedness refers to the distribution of phonemes across different languages.": 0 }, "explanation": "Markedness in linguistics refers to the tendency for certain linguistic forms to be more complex or marked than others, often indicating non-default or less frequent patterns. For example, irregular past tense forms in English, such as 'went' for 'go,' are marked because they deviate from the regular pattern of adding '-ed' to form past tense verbs." },
        "What is the role of prosody in speech production and perception?": { "answers": { "Prosody refers to the rhythm, intonation, and stress patterns of speech, which convey information about sentence structure, mood, emphasis, and speaker attitude.": 1, "Prosody refers to the study of speech sounds and their articulatory properties.": 0, "Prosody refers to the process of language acquisition and development in children.": 0, "Prosody refers to the historical changes in pronunciation and grammar within a language.": 0 }, "explanation": "Prosody plays a crucial role in speech production and perception by conveying information about sentence structure, mood, emphasis, and speaker attitude through rhythm, intonation, and stress patterns. It helps listeners interpret the meaning and emotional content of spoken utterances." },
        "Discuss the concept of linguistic relativity and its implications for cross-cultural communication.": { "answers": { "Linguistic relativity suggests that language influences thought and perception, leading to differences in worldview and cognitive processes across cultures. This has implications for cross-cultural communication, as speakers of different languages may perceive and interpret the world differently.": 1, "Linguistic relativity proposes that all languages are fundamentally the same in structure and function, regardless of cultural differences.": 0, "Linguistic relativity suggests that language has no influence on thought or perception, and thus has no implications for cross-cultural communication.": 0, "Linguistic relativity suggests that only written language, not spoken language, influences thought and perception.": 0 }, "explanation": "Linguistic relativity, also known as the Sapir-Whorf hypothesis, suggests that language influences thought and perception, leading to differences in worldview and cognitive processes across cultures. This has implications for cross-cultural communication, as speakers of different languages may perceive and interpret the world differently due to linguistic differences." },
        "What is the role of context in language comprehension and interpretation?": { "answers": { "Context plays a crucial role in language comprehension and interpretation by providing additional information that helps listeners infer meaning, disambiguate words or phrases, and understand implicit messages.": 1, "Context has no impact on language comprehension and interpretation, as meaning is solely determined by the words themselves.": 0, "Context only affects written language comprehension, but not spoken language comprehension.": 0, "Context is irrelevant in language interpretation, as listeners rely solely on grammar and syntax to understand meaning.": 0 }, "explanation": "Context plays a crucial role in language comprehension and interpretation by providing additional information that helps listeners infer meaning, disambiguate words or phrases, and understand implicit messages. It allows listeners to make inferences based on prior knowledge and situational cues, contributing to a more accurate understanding of the intended message." },
        "What is the role of metalinguistic awareness in language learning and development?": { "answers": { "Metalinguistic awareness refers to the ability to reflect on and manipulate language as an object of analysis, leading to greater understanding of language structure, rules, and usage. It plays a crucial role in language learning and development by enabling learners to monitor and control their language use, identify errors, and apply language skills in various contexts.": 1, "Metalinguistic awareness refers to the automatic process of language acquisition, independent of conscious reflection or analysis.": 0, "Metalinguistic awareness refers to the study of historical changes in language usage over time.": 0, "Metalinguistic awareness refers to the social aspects of language use, such as politeness strategies and discourse markers.": 0 }, "explanation": "Metalinguistic awareness refers to the ability to reflect on and manipulate language as an object of analysis, leading to greater understanding of language structure, rules, and usage. It allows learners to monitor and control their language use, identify errors, and apply language skills in various contexts, contributing to language learning and development." },
        "Explain the concept of language universals and provide examples.": { "answers": { "Language universals are features or patterns found in all languages, regardless of their genetic relationship or geographical distribution. Examples include the distinction between nouns and verbs, the use of word order to convey meaning, and the presence of grammatical categories such as tense and aspect.": 1, "Language universals refer to features that are unique to individual languages, distinguishing them from others.": 0, "Language universals are cultural practices that are transmitted from generation to generation through language.": 0, "Language universals are features that are present in the majority of languages, but not all.": 0 }, "explanation": "Language universals are features or patterns found in all languages, regardless of their genetic relationship or geographical distribution. They represent shared aspects of human language and cognition that are common to all linguistic systems. Examples include the distinction between nouns and verbs, the use of word order to convey meaning, and the presence of grammatical categories such as tense and aspect." },
        "What are some key differences between phonetics and phonology?": { "answers": { "Phonetics is the study of the physical properties of speech sounds, including their articulation, acoustic properties, and auditory perception, while phonology is the study of the abstract, cognitive aspects of speech sounds, including their systematic organization and patterning within a particular language.": 1, "Phonetics is the study of speech sounds in isolation, while phonology is the study of speech sounds in connected speech.": 0, "Phonetics focuses on the articulatory features of speech sounds, while phonology focuses on their acoustic properties.": 0, "Phonetics focuses on the perception of speech sounds, while phonology focuses on their production.": 0 }, "explanation": "Phonetics is the study of the physical properties of speech sounds, including their articulation, acoustic properties, and auditory perception. It examines how speech sounds are produced, transmitted, and perceived by the human auditory system. Phonology, on the other hand, is the study of the abstract, cognitive aspects of speech sounds, including their systematic organization and patterning within a particular language. It deals with the mental representations of speech sounds and the rules governing their combination and distribution." },
        "Explain the concept of language acquisition and development in children.": { "answers": { "Language acquisition refers to the process by which children acquire their native language(s) through exposure to linguistic input, leading to the development of language skills and communicative competence. It involves the gradual acquisition of phonological, morphological, syntactic, semantic, and pragmatic knowledge and abilities.": 1, "Language acquisition refers to the conscious learning of a second language by children, typically in educational settings.": 0, "Language acquisition refers to the socialization process through which children learn the rules of polite behavior and interaction in their culture.": 0, "Language acquisition refers to the automatic process of language learning, independent of environmental input or interaction.": 0 }, "explanation": "Language acquisition refers to the process by which children acquire their native language(s) through exposure to linguistic input, leading to the development of language skills and communicative competence. It involves the gradual acquisition of phonological, morphological, syntactic, semantic, and pragmatic knowledge and abilities, guided by innate linguistic mechanisms and social interaction with caregivers and peers." }
      }
    },

    quiz: {
      // "Кто считает миллионы тысячами?": { answers: { "Миллиардер": 1, "Миллионер": 0, "Банкир": 0, "Швейцар": 0 }, type: "default" },
      // "Ребус": { rightAnswer: "платеж", photoUrl: "https://i.ibb.co/cLBq9Pc/rebus-1.jpg", placeholder: "экономика", type: "guess" },
      // "Какую страну называют банкиром всего мира?": { answers: { "Швейцария": 1, "Швеция": 0, "Италия": 0, "США": 0 }, type: "default" },
      // "Монеты не всегда были круглыми. Раньше они были самых разных форм, но мошенники срезали края, чтобы сделать новые монеты. Чтобы победить это преступное явление, делать монеты сразу круглыми предложил философ и физик Готфрид Лейбниц": { answers: { "Верю": 0, "Не верю": 1 }, photoUrl: "https://fintolk.pro/wp-content/uploads/2020/08/monete_romane_6.jpg?x80894", type: "believe" },
      // "Где находится море Кризисов?": { answers: { "На Луне": 1, "В Италии": 0, "В России": 0, "На Сатурне": 0 }, type: "default" },
      // "Назовите мероприятие, где цену набивают молотком": { answers: { "Аукцион": 1, "Ограбление": 0, "Собрание": 0, "Совещание": 0 }, type: "default" },
      "Guess who is in the photo?": { rightAnswer: "Steve Jobs", descr: "Pioneer of the Information Technology Age", photoUrl: "https://i.ibb.co/BgKjR5y/image.jpg", placeholder: " Petr Petrov", type: "guess" },
      // "Виды какого города можно увидеть на российской купюре достоинством в 5000 рублей?": { answers: { "Хабаровск": 1, "Архангельск": 0, "Москва": 0, "Саратов": 0 }, type: "default" },
       //"Угадайте человека по описанию": { rightAnswer: "Павел Дуров", descr: "Предприниматель и программист, долларовый миллиардер", photoUrl: "https://i.ibb.co/vVmMnsm/image.jpg", placeholder: "Петр Петров", type: "guess" },
      // "Самая тяжелая монета была отчеканена в 2011 году в австрийском городе Перта. Ее диаметр составил 80 сантиметров, толщина — 12 сантиметров, а масса — 1012 килограммов. Это мировой рекорд": { answers: { "Верю": 1, "Не верю": 0 }, type: "believe" },
      // "Все люди, изображенные на долларах США, были президентами этой страны": { answers: { "Верю": 0, "Не верю": 1 }, photoUrl: "https://fintolk.pro/wp-content/uploads/2020/08/3de3c62a976b35b91e45fe9509249eb75661e9c8.jpg?x80894", type: "believe" },
      // "Какому иностранному государству принадлежит следующие название денег: крона": { answers: { "Швеция": 1, "Турция": 0, "Франция": 0, "Германия": 0 }, type: "default" },
      // "Дайте ответ на ребус": { rightAnswer: "стоимость", photoUrl: "https://i.ibb.co/d51MjmG/rebus-6.jpg", placeholder: "экономика", type: "guess" },
      // "Какому иностранному государству принадлежит следующие название денег: лира": { answers: { "Турция": 1, "Италия": 0, "Испания": 0, "Финляндия": 0 }, type: "default" },
      // "Вам дана фотография человека. Кто это?": { rightAnswer: "Карл Маркс", descr: "Немецкий философ, социолог, экономист, писатель, поэт, политический журналист", photoUrl: "https://i.ibb.co/yNdbsnq/image.jpg", placeholder: "Петр Петров", type: "guess" },
      // "Самая распространенная купюра в мире - 100 американских долларов": { answers: { "Верю": 1, "Не верю": 0 }, photoUrl: "https://fintolk.pro/wp-content/uploads/2020/08/depositphotos_63299423_l-2015.jpg?x80894", type: "believe" },
      // "Колумбийский наркобарон Пабло Эскобар однажды вынужден был поддерживать костёр деньгами, скрываясь от преследователей в горах. Чтобы обогреть свою семью, он сжёг два миллиона долларов": { answers: { "Верю": 1, "Не верю": 0 }, type: "believe" },
      // "Виды какого города можно увидеть на российской купюре достоинством в 500 рублей?": { answers: { "Архангельск": 1, "Хабаровск": 0, "Москва": 0, "Саратов": 0 }, type: "default" },
      "Who's in the photo?": { rightAnswer: "Henry Ford", descr: "The man who put the world on wheels", photoUrl: "https://i.ibb.co/JkDKw1m/Genri-Ford.png", placeholder: "Petr Petrov", type: "guess" },
      // "Что загадано в ребусе?": { rightAnswer: "экспорт", photoUrl: "https://i.ibb.co/QDwD0c6/rebus-4.jpg", placeholder: "экономика", type: "guess" },
      // "От крупнейшей в истории финансовой аферы пострадало 3 млн. человек, а решением суда было назначено наказание – 150 лет лишения свободы": { answers: { "Верю": 1, "Не верю": 0 }, type: "believe" },
      // "Разгадайте ребус": { rightAnswer: "кредит", photoUrl: "https://i.ibb.co/9pM41Bx/rebus-2.jpg", placeholder: "экономика", type: "guess" },
      // "Один из очень «талантливых» мошенников Европы в 20-х годах прошлого столетия попытался продать бизнесменам Эйфелеву башню как металлолом… дважды, и один раз весьма удачно! ": { answers: { "Верю": 1, "Не верю": 0 }, type: "believe" },
      "Guess who's in the photo?": { rightAnswer: "Bill Gates", descr: "Entrepreneur and philanthropist who has been recognized more than once as the richest man on the planet", photoUrl: "https://i.ibb.co/3dZbRh5/Bill -Gats.png", placeholder: "Petr Petrov", type: "guess" },
      // "Назовите функцию, показывающую, сколько единиц товара покупатели готовы купить по данной цене": { answers: { "Функция спроса": 1, "Функция предложения": 0, "Функция ликвидности": 0, "Функция денег": 0 }, type: "default" },
      // "Ребус на барабане!": { rightAnswer: "пенсия", photoUrl: "https://i.ibb.co/F6NXqzd/rebus-3.jpg", placeholder: "экономика", type: "guess" },
      "Who is shown in the photo?": { rightAnswer: "Elon Musk", descr: "Entrepreneur, billionaire, inventor and investor who set a goal to organize «space tourism»", photoUrl: "https://i.ibb.co/ qjfVgrR/image.jpg", placeholder: "Petr Petrov", type: "guess" },
      // "Цена на электрический чайник была повышена на 15% и составила 3450 рублей. Сколько рублей стоил чайник до повышения цены?": { answers: { "3000": 1, "3015": 0, "4500": 0, "2950": 0 }, type: "default" },
      // "Разшифруйте ребус": { rightAnswer: "товар", photoUrl: "https://i.ibb.co/h2zCgKq/rebus-5.jpg", placeholder: "экономика", type: "guess" },

      "The word 'queue' is the only word in the English language that is still pronounced the same way when the last four letters are removed.": { "answers": { "True": 1, "False": 0 }, "type": "believe" },
      "The shortest complete sentence in the English language is 'I am.'": { "answers": { "True": 1, "False": 0 }, "type": "believe" },
      "The word 'bookkeeper' (with three consecutive double letters) is the only unhyphenated English word with three consecutive double letters.": { "answers": { "True": 1, "False": 0 }, "type": "believe" },
      "The sentence 'The quick brown fox jumps over the lazy dog' uses every letter of the alphabet.": { "answers": { "True": 1, "False": 0 }, "type": "believe" },
      "The dot over the letters 'i' and 'j' is called a 'tittle.'": { "answers": { "True": 1, "False": 0 }, "type": "believe" },
      "Rebus": { rightAnswer: "pineapple", photoUrl: "https://i.ibb.co/CbcBwfq/rebus1.png", placeholder: "car", type: "guess" },
      "Before you is Rebus!": { rightAnswer: "street", photoUrl: "https://i.ibb.co/QHRRwyJ/rebus2.png", placeholder: "weather", type: "guess" },
      "Guess the rebus": { rightAnswer: "window", photoUrl: "https://i.ibb.co/djWc7hj/rebus3.png", placeholder: "man", type: "guess" },
      "Decipher the rebus": { rightAnswer: "championship", photoUrl: "https://i.ibb.co/D9BScwr/rebus4.png", placeholder: "type", type: "guess" },
      "What is hidden in the rebus?": { rightAnswer: "coffee", photoUrl: "https://i.ibb.co/v17zwNm/rebus5.png", placeholder: "sentence", type: "guess" },
      "Solve the rebus": { rightAnswer: "milk", photoUrl: "https://i.ibb.co/sydVJxG/rebus6.png", placeholder: "language", type: "guess" },

      "Кто считает миллионы тысячами?": {
        "answers": {
          "Миллиардер": 1,
          "Миллионер": 0,
          "Банкир": 0,
          "Швейцар": 0
        },
        "type": "default"
      },
      "Уберите лишнее слово из списка: Easter, Christmas, Columbus, St Valentine’s Day": {
        "answers": {
          "Easter": 0,
          "Christmas": 0,
          "Columbus": 1,
          "St Valentine’s Day": 0
        },
        "type": "default"
      },
      "Уберите лишнее слово из списка: Swimming, hockey, moving, football": {
        "answers": {
          "Swimming": 0,
          "hockey": 0,
          "moving": 1,
          "football": 0
        },
        "type": "default"
      },
      "Уберите лишнее слово из списка: yellow, brown, grey, sky": {
        "answers": {
          "yellow": 0,
          "brown": 0,
          "grey": 0,
          "sky": 1,
        },
        "type": "default"
      },
      "В русском языке существует идиома 'Бить баклуши', её английский аналог звучит так 'To twiddle one’s thumbs'. Вопрос: как дословно переводиться эта фраза на русский язык?": {
        "answers": {
          "Чтобы пошевелить большими пальцами": 1,
          "Чтобы играть на скрипке": 0,
          "Чтобы зевать": 0,
          "Чтобы крутить пальцем у виска": 0
        },
        "type": "default"
      },
      "В русском языке существует идиома 'Любопытной Варваре на базаре нос оторвали', её английский аналог звучит так 'Curiosity killed the cat'. Вопрос: как дословно переводиться эта фраза на русский язык?": {
        "answers": {
          "Любопытство сгубило кошку": 1,
          "Любопытство умерло с котом": 0,
          "Любопытство не пропадает": 0,
          "Любопытство ловит мышей": 0
        },
        "type": "default"
      },
      "В русском языке существует идиома 'Без труда не вытащишь и рыбку из пруда', её английский аналог звучит так 'No pain, no gain'. Вопрос: как дословно переводиться эта фраза на русский язык?": {
        "answers": {
          "Ни боли, ни выгоды": 1,
          "Ни пота, ни крови": 0,
          "Ни труда, ни тамбура": 0,
          "Ни дела, ни беды": 0
        },
        "type": "default"
      }
    }
  },
  questionsQuantityByExplanation: {
    test: {
      "easy": 20,
      "medium": 20,
      "hard": 20
    },
    quiz: 15
  },
  counter: 0,
  rightAnswers: 0,
  quizIsDone: false,
  reactions: ['Надо подучить!', 'Неплохо!', 'Отличнооо!'],
  currentDifficulty: null,
  explanationIsNeeded: false,
  explanationIsShowed: false,
  username: '',
  userscores: { "easy": 0, "medium": 0, "hard": 0 },
  userID: null,
  userToken: null,
  gameType: null,
  shuffledList: null,
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    nextQuestion: (state, { payload }) => {
      const currQuestionsLen = state.gameType === "test" ? Object.keys(state.questions.test[state.currentDifficulty]).length : state.questionsQuantityByExplanation.quiz;
      if (state.counter + 1 === currQuestionsLen) {
        state.quizIsDone = true;
      }
      

      if (payload === 1) state.rightAnswers += 1;

      state.counter += 1;
    },

    setShuffledList: (state, {payload}) => {
      state.shuffledList = payload;
    },

    finishQuiz: (state) => {
      state.quizIsDone = true;
    },

    rightAnswer: (state) => {
      state.rightAnswers += 1;
    },

    resetQuiz: (state) => {
      state.quizIsDone = false;
      state.counter = 0;
      state.rightAnswers = 0;
      state.currentDifficulty = null;
      state.explanationIsNeeded = false;
      state.shuffledList = null;
    },

    setDifficulty: (state, { payload }) => {
      state.currentDifficulty = payload;
    },

    setExplanationIsNeeded: (state) => {
      state.explanationIsNeeded = !state.explanationIsNeeded;
    },

    setExplanationIsShowed: (state) => {
      state.explanationIsShowed = !state.explanationIsShowed;
    },

    setUsername: (state, { payload }) => {
      state.username = payload;
    },

    setUserData: (state, { payload }) => {
      state.userID = payload.id;
      state.userscores = { "easy": payload.scores.easy, "medium": payload.scores.medium, "hard": payload.scores.hard };
      state.userToken = payload.token;
    },

    updateUserScore: (state, { payload }) => {
      state.userscores[payload.currentDifficulty] = payload.score;
    },

    setGameType: (state, { payload }) => {
      state.gameType = payload;
    }
  }
})

export default quizSlice.reducer;