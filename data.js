const psychologyTerms = {
  "Introduction": [
    "Behavior", "Mind", "Cognition", "Emotion", "Motivation", "Perception", "Learning", "Introspection", "Observation", "Empiricism",
    "Scientific Method", "Hypothesis", "Theory", "Variables", "Experiment", "Data", "Interpretation", "Analysis", "Replication", "Validity",
    "Ethics", "Bias", "Objectivity", "Psychodynamics", "Humanism", "Behaviorism", "Structuralism", "Functionalism", "Gestalt Psychology", "Consciousness", "Unconscious",
    "Psychoanalysis", "Personality", "Development", "Social Behavior", "Mental Health", "Stress", "Coping Mechanisms", "Resilience", "Memory", "Conditioning",
    "Psychiatry", "Psychology", "Counseling", "Therapy", "Clinical Psychology", "Cultural Psychology", "Cross-Cultural Research", "Neuropsychology", "Psychophysiology", "Cognitive Neuroscience"
  ],
  "Methods of Psychology": [
    "Research Design", "Quantitative Methods", "Qualitative Methods", "Experimentation", "Survey", "Interview", "Case Study", "Observation", "Correlational Study", "Longitudinal Study",
    "Cross-Sectional Study", "Random Assignment", "Sampling", "Validity", "Reliability", "Control Group", "Experimental Group", "Independent Variable", "Dependent Variable", "Confounding Variables",
    "Ethical Considerations", "Informed Consent", "Debriefing", "Double-Blind Procedure", "Placebo", "Operational Definition", "Meta-Analysis", "Statistical Significance", "Descriptive Statistics", "Inferential Statistics",
    "Mean", "Median", "Mode", "Standard Deviation", "Variance", "Normal Distribution", "Correlation Coefficient", "Chi-Square Test", "T-Test", "ANOVA",
    "Ethnography", "Field Study", "Replicability", "Internal Validity", "External Validity", "Participant Bias", "Observer Bias", "Interrater Reliability", "Archival Research", "Pilot Study"
  ],
  "Biological Basis of Behavior": [
    "Neuron", "Synapse", "Neurotransmitter", "Dopamine", "Serotonin", "Acetylcholine", "Cerebral Cortex", "Frontal Lobe", "Parietal Lobe", "Occipital Lobe",
    "Temporal Lobe", "Thalamus", "Hypothalamus", "Amygdala", "Hippocampus", "Cerebellum", "Brainstem", "Spinal Cord", "Autonomic Nervous System", "Sympathetic Nervous System",
    "Parasympathetic Nervous System", "Endocrine System", "Hormones", "Pituitary Gland", "Adrenal Gland", "Thyroid Gland", "Pancreas", "Homeostasis", "Genetics", "Chromosomes",
    "DNA", "Gene Expression", "Evolutionary Psychology", "Natural Selection", "Heritability", "Twin Studies", "Brain Imaging", "fMRI", "PET Scan", "EEG",
    "Neuroplasticity", "Action Potential", "Resting Potential", "Synaptic Transmission", "Myelin", "Axon", "Dendrites", "Glial Cells", "Cognitive Neuroscience", "Neurogenesis"
  ],
  "Development of Human Behavior": [
    "Developmental Psychology", "Maturation", "Infancy", "Childhood", "Adolescence", "Adulthood", "Aging", "Cognitive Development", "Social Development", "Emotional Development",
    "Moral Development", "Attachment", "Parenting Styles", "Temperament", "Identity Formation", "Erikson's Stages of Development", "Piaget's Stages", "Vygotsky's Theory", "Language Development", "Critical Period",
    "Puberty", "Learning Disabilities", "Autism Spectrum Disorder", "Adolescent Risk Behaviors", "Resilience", "Lifespan", "Grief", "Bereavement", "Gender Identity", "Sexual Orientation",
    "Cultural Influences", "Socioeconomic Status", "Family Systems", "Peer Influence", "Bullying", "Self-Regulation", "Self-Esteem", "Play Behavior", "Social Learning", "Generativity",
    "Cognitive Decline", "Memory Decline", "Wisdom", "Retirement", "Caregiving", "Death", "Dying", "Hospice Care", "End-of-Life", "Legacy"
  ],
  "Sensation, Attention, and Perception": [
    "Sensation", "Perception", "Attention", "Selective Attention", "Divided Attention", "Top-Down Processing", "Bottom-Up Processing", "Visual Perception", "Auditory Perception", "Gestalt Principles",
    "Figure-Ground", "Proximity", "Similarity", "Continuity", "Closure", "Depth Perception", "Binocular Cues", "Monocular Cues", "Visual Illusions", "Perceptual Constancy",
    "Size Constancy", "Shape Constancy", "Brightness Constancy", "Color Perception", "Hearing", "Taste", "Smell", "Touch", "Kinesthetic Sense", "Vestibular Sense",
    "Sensory Adaptation", "Sensory Threshold", "Absolute Threshold", "Difference Threshold", "Signal Detection Theory", "Psychophysics", "Subliminal Perception", "Attentional Blink", "Change Blindness", "Inattentional Blindness",
    "Feature Integration Theory", "Visual Search", "Perceptual Set", "Sensory Integration", "Multisensory Perception", "Neural Representation", "Retinal Disparity", "Visual Cortex", "Temporal Lobe Processing", "Cognitive Load"
  ],
  "Learning": [
    "Classical Conditioning", "Operant Conditioning", "Reinforcement", "Punishment", "Positive Reinforcement", "Negative Reinforcement", "Shaping", "Extinction", "Generalization", "Discrimination",
    "Observational Learning", "Social Learning Theory", "Modeling", "Vicarious Reinforcement", "Vicarious Punishment", "Acquisition", "Behavior Modification", "Token Economy", "Self-Efficacy", "Habituation",
    "Sensitization", "Latent Learning", "Cognitive Map", "Insight Learning", "Biological Preparedness", "Instinctive Drift", "Learned Helplessness", "Phobia", "Behaviorism", "Cognitive Learning",
    "Trial and Error", "Contingency", "Feedback", "Contiguity", "Aversive Conditioning", "Behavioral Inhibition", "Drive Theory", "Fixed Interval Schedule", "Variable Interval Schedule", "Fixed Ratio Schedule",
    "Variable Ratio Schedule", "Behavioral Economics", "Social Reinforcement", "Learned Optimism", "Fear Conditioning", "Avoidance Learning", "Escape Learning", "Errorless Learning", "Motivational Interviewing", "Goal Setting"
  ],
  "Memory": [
    "Short-Term Memory", "Long-Term Memory", "Working Memory", "Sensory Memory", "Encoding", "Storage", "Retrieval", "Recall", "Recognition", "Relearning",
    "Forgetting", "Interference", "Proactive Interference", "Retroactive Interference", "Decay", "Cue-Dependent Forgetting", "Repression", "Flashbulb Memory", "Episodic Memory", "Semantic Memory",
    "Procedural Memory", "Explicit Memory", "Implicit Memory", "Autobiographical Memory", "Memory Consolidation", "Chunking", "Mnemonics", "Priming", "Amnesia", "Anterograde Amnesia",
    "Retrograde Amnesia", "Memory Reconstruction", "False Memory", "Source Amnesia", "Childhood Amnesia", "Déjà Vu", "Cognitive Load", "Hippocampus", "Neural Encoding", "Memory Retrieval Failure",
    "Emotional Memory", "Eyewitness Testimony", "Recovered Memory", "Working Memory Capacity", "Memory Span", "Encoding Specificity", "Context-Dependent Memory", "State-Dependent Memory", "Distributed Practice", "Memory Rehearsal"
  ],
  "Thinking and Problem Solving": [
    "Cognition", "Problem Solving", "Reasoning", "Decision Making", "Heuristics", "Algorithms", "Deductive Reasoning", "Inductive Reasoning", "Confirmation Bias", "Fixation",
    "Functional Fixedness", "Mental Set", "Insight", "Creativity", "Divergent Thinking", "Convergent Thinking", "Cognitive Dissonance", "Framing Effect", "Belief Perseverance", "Availability Heuristic",
    "Representativeness Heuristic", "Anchoring Bias", "Overconfidence Bias", "Hindsight Bias", "Counterfactual Thinking", "Metacognition", "Analogical Reasoning", "Problem Space", "Means-End Analysis", "Trial and Error",
    "Syllogism", "Belief Bias", "Deduction", "Induction", "Transitive Reasoning", "Moral Reasoning", "Critical Thinking", "Hypothetical Thinking", "Counterfactual Reasoning", "Transfer of Learning",
    "Base Rate Fallacy", "Prospect Theory", "Bounded Rationality", "Cognitive Illusions", "Sunk Cost Fallacy", "Affect Heuristic", "Dual Process Theory", "Self-Justification", "Mental Simulation", "Cognitive Flexibility"
  ],
  "Motivation and Emotion": [
    "Motivation", "Drive", "Intrinsic Motivation", "Extrinsic Motivation", "Homeostasis", "Maslow's Hierarchy of Needs", "Self-Actualization", "Needs Theory", "Arousal", "Incentive Theory",
    "Expectancy Theory", "Achievement Motivation", "Self-Determination Theory", "Autonomy", "Competence", "Relatedness", "Emotion", "Affect", "Mood", "Facial Feedback Hypothesis",
    "James-Lange Theory", "Cannon-Bard Theory", "Two-Factor Theory", "Cognitive Appraisal", "Emotional Intelligence", "Fear", "Anger", "Sadness", "Happiness", "Surprise",
    "Disgust", "Fight-or-Flight Response", "Sympathetic Nervous System", "Parasympathetic Nervous System", "Amygdala", "Emotional Regulation", "Stress", "Coping", "Eustress", "Distress",
    "Frustration", "Conflict", "Approach-Approach Conflict", "Approach-Avoidance Conflict", "Avoidance-Avoidance Conflict", "Emotional Labor", "Mood Disorders", "Affective Disorders", "Depression", "Anxiety"
  ],
  "Intelligence and Aptitude": [
    "Intelligence", "IQ", "G Factor", "Multiple Intelligences", "Emotional Intelligence", "Fluid Intelligence", "Crystallized Intelligence", "Aptitude", "Cognitive Abilities", "Mental Age",
    "Stanford-Binet Test", "Wechsler Scales", "Achievement Test", "Aptitude Test", "Factor Analysis", "General Intelligence", "Specific Intelligence", "Cognitive Load", "Working Memory", "Processing Speed",
    "Executive Function", "Problem Solving", "Reasoning", "Verbal Intelligence", "Nonverbal Intelligence", "Visual-Spatial Intelligence", "Mathematical Intelligence", "Practical Intelligence", "Creative Intelligence", "Analytical Intelligence",
    "Cultural Bias", "Stereotype Threat", "Emotional Quotient", "Savants", "Giftedness", "Learning Disability", "Developmental Delay", "Down Syndrome", "Intellectual Disability", "Test Standardization",
    "Test Reliability", "Test Validity", "Norms", "Standard Scores", "Percentile Ranks", "Deviation IQ", "Flynn Effect", "Cognitive Reserve", "Neuroplasticity", "Mindset"
  ],
  "Personality": [
    "Personality", "Trait Theory", "Five-Factor Model", "Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Neuroticism", "Temperament", "Character",
    "Psychodynamic Theory", "Id", "Ego", "Superego", "Defense Mechanisms", "Projection", "Denial", "Repression", "Displacement", "Sublimation",
    "Personality Disorders", "Borderline Personality Disorder", "Narcissistic Personality Disorder", "Histrionic Personality Disorder", "Obsessive-Compulsive Personality Disorder", "Introversion", "Extroversion", "Self-Concept", "Self-Esteem", "Self-Efficacy",
    "Self-Regulation", "Locus of Control", "Big Five Personality Traits", "Self-Actualization", "Personality Assessment", "MMPI", "Rorschach Test", "Thematic Apperception Test", "MBTI", "Psychopathy",
    "Sensation Seeking", "Behavioral Inhibition", "Behavioral Activation", "Temperament", "Emotional Stability", "Identity", "Maturity", "Moral Development", "Attachment Styles", "Person-Situation Debate"
  ],
  "Attitudes, Values, and Interests": [
    "Attitudes", "Values", "Beliefs", "Cognitive Dissonance", "Persuasion", "Attitude Change", "Conformity", "Obedience", "Social Norms", "Stereotypes",
    "Prejudice", "Discrimination", "Self-Perception Theory", "Elaboration Likelihood Model", "Central Route to Persuasion", "Peripheral Route to Persuasion", "Attitude Strength", "Implicit Attitudes", "Explicit Attitudes", "Normative Influence",
    "Informational Influence", "Groupthink", "Group Polarization", "Cultural Values", "Social Influence", "Moral Values", "Cognitive Consistency", "Interest Inventories", "Intrinsic Interest", "Extrinsic Interest",
    "Career Interests", "Vocational Interests", "Value Congruence", "Role Models", "Leadership", "Conservatism", "Liberalism", "Self-Enhancement", "Self-Transcendence", "Collectivism",
    "Individualism", "Social Comparison", "Moral Development", "Ethical Reasoning", "Spirituality", "Religious Values", "Altruism", "Prosocial Behavior", "Volunteering", "Empathy"
  ],
  "Language and Communication": [
    "Language", "Phonology", "Morphology", "Syntax", "Semantics", "Pragmatics", "Linguistics", "Speech", "Language Acquisition", "Critical Period",
    "Bilingualism", "Multilingualism", "Nonverbal Communication", "Gestures", "Facial Expressions", "Body Language", "Tone of Voice", "Verbal Communication", "Language Development", "Language Disorders",
    "Aphasia", "Broca's Aphasia", "Wernicke's Aphasia", "Sign Language", "Speech Perception", "Speech Production", "Linguistic Relativity", "Sapir-Whorf Hypothesis", "Inner Speech", "Cognitive Linguistics",
    "Grammar", "Prosody", "Narrative", "Metaphor", "Discourse", "Conversation Analysis", "Turn-Taking", "Code-Switching", "Speech Acts", "Language Processing",
    "Semantic Memory", "Symbolic Interactionism", "Language Comprehension", "Speech Recognition", "Language Use", "Social Communication", "Text Messaging", "Social Media Communication", "Written Communication", "Reading"
  ],
  "Issues and Perspectives in Modern Contemporary Psychology": [
    "Contemporary Psychology", "Cultural Psychology", "Cross-Cultural Psychology", "Social Justice", "Diversity", "Equity", "Mental Health", "Trauma", "Disaster Psychology", "Positive Psychology",
    "Crisis Intervention", "Community Mental Health", "Ecological Psychology", "Systems Theory", "Critical Psychology", "Postmodern Psychology", "Feminist Psychology", "Cognitive Behavioral Therapy", "Humanistic Psychology", "Existential Psychology",
    "Integrative Approaches", "Evidence-Based Practice", "Multicultural Counseling", "Social Identity Theory", "Attachment Theory", "Psychopathology", "Psychotherapy", "Cognitive Distortions", "Resilience", "Mindfulness",
    "Self-Care", "Wellness", "Mental Health Stigma", "Psychiatric Rehabilitation", "Crisis Management", "Cognitive Behavioral Approaches", "Community Support", "Interpersonal Therapy", "Strength-Based Approaches", "Behavioral Activation",
    "Psychosocial Interventions", "Cognitive Restructuring", "Empowerment", "Social Change", "Therapeutic Alliance", "Therapeutic Relationships", "Clinical Psychology", "Counseling Psychology", "Community Psychology", "Social Work"
  ],
  "Psychological Measurement of Individual Differences": [
    "Psychological Measurement", "Individual Differences", "Standardized Testing", "Norm-Referenced Tests", "Criterion-Referenced Tests", "Reliability", "Validity", "Construct Validity", "Content Validity", "Criterion Validity",
    "Test Bias", "Item Response Theory", "Performance Assessment", "Personality Assessment", "Cognitive Assessment", "Emotional Assessment", "Behavioral Assessment", "Self-Report Measures", "Behavioral Observations", "Interviews",
    "Psychometric Properties", "Test Administration", "Scoring", "Interpreting Scores", "Multifactorial Models", "Diversity in Assessment", "Intelligence Testing", "Aptitude Testing", "Creativity Testing", "Behavioral Rating Scales",
    "Test Construction", "Factor Analysis", "Norms", "Percentiles", "Standard Deviation", "T-scores", "Z-scores", "Regression Analysis", "Correlation", "Test Retest Reliability",
    "Internal Consistency", "Split-Half Reliability", "Semantic Differential", "Likert Scale", "Visual Analog Scale", "Surveys", "Questionnaires", "Ethical Issues in Assessment", "Test Security"
  ],
  "Theories of Personality": [
    "Theories of Personality", "Psychoanalytic Theory", "Freudian Theory", "Neo-Freudian Theory", "Jungian Psychology", "Behavioral Theory", "Social Learning Theory", "Cognitive Theory", "Humanistic Theory", "Trait Theory",
    "Biological Theory", "Evolutionary Psychology", "Motivational Theory", "Existential Theory", "Phenomenological Theory", "Person-Centered Approach", "Self-Actualization Theory", "Transpersonal Psychology", "Attachment Theory", "Character Development",
    "Self-Theories", "Psychosocial Development", "Erikson's Stages", "Behavioral Genetics", "Social Identity Theory", "Identity Development", "Socialization", "Family Dynamics", "Cultural Influences", "Personality Stability",
    "Personality Change", "The Big Five", "HEXACO Model", "Trait Activation Theory", "Personality Traits", "Moral Personality", "Prosocial Personality", "Altruism", "Narcissism", "Shyness",
    "Introversion", "Extroversion", "Coping Styles", "Resilience", "Hardiness", "Optimism", "Pessimism", "Psychological Well-Being", "Self-Regulation", "Self-Control"
  ],
  "Therapeutic Approaches": [
    "Therapeutic Approaches", "Psychotherapy", "Cognitive Behavioral Therapy (CBT)", "Dialectical Behavior Therapy (DBT)", "Humanistic Therapy", "Gestalt Therapy", "Psychodynamic Therapy", "Existential Therapy", "Solution-Focused Therapy", "Family Therapy",
    "Couples Therapy", "Group Therapy", "Play Therapy", "Art Therapy", "Music Therapy", "Narrative Therapy", "Mindfulness-Based Therapy", "Interpersonal Therapy (IPT)", "Acceptance and Commitment Therapy (ACT)", "Schema Therapy",
    "Crisis Intervention", "Behavioral Therapy", "Exposure Therapy", "Desensitization", "Motivational Interviewing", "Mind-Body Connection", "Somatic Therapy", "Eclectic Therapy", "Integrative Therapy", "Positive Psychology Interventions",
    "Therapeutic Alliance", "Therapeutic Relationships", "Transference", "Countertransference", "Client-Centered Therapy", "Psychoeducation", "Assertiveness Training", "Coping Skills Training", "Communication Skills Training", "Relapse Prevention",
    "Self-Help Techniques", "Online Therapy", "Teletherapy", "Crisis Counseling", "Support Groups", "Community Resources", "Referral", "Ethical Considerations", "Confidentiality", "Informed Consent"
  ],
  "Work Psychology and Organizational Behavior": [
    "Work Psychology", "Industrial-Organizational Psychology", "Job Analysis", "Employee Selection", "Performance Appraisal", "Training and Development", "Organizational Culture", "Work Motivation", "Job Satisfaction", "Employee Engagement",
    "Leadership", "Team Dynamics", "Group Behavior", "Workplace Communication", "Conflict Resolution", "Organizational Change", "Psychological Safety", "Diversity and Inclusion", "Work-Life Balance", "Job Stress",
    "Burnout", "Workplace Mental Health", "Occupational Health Psychology", "Human Resource Management", "Motivational Theories in Work", "Equity Theory", "Expectancy Theory in Work", "Goal Setting Theory", "Transformational Leadership",
    "Transactional Leadership", "Authentic Leadership", "Servant Leadership", "Coaching", "Mentoring", "Employee Well-Being", "Organizational Commitment", "Job Design", "Work Environment", "Career Development",
    "Psychological Contract", "Job Crafting", "Workplace Bullying", "Harassment", "Employee Turnover", "Talent Management", "Succession Planning", "Organizational Psychology", "Change Management", "Workplace Training"
  ],
  "Application of Psychology to Educational Field": [
    "Educational Psychology", "Learning Theories", "Cognitive Development", "Constructivism", "Behaviorism", "Social Learning Theory", "Motivation in Education", "Assessment in Education", "Formative Assessment", "Summative Assessment",
    "Standardized Testing", "Learning Styles", "Multiple Intelligences", "Differentiated Instruction", "Cognitive Load Theory", "Self-Regulated Learning", "Metacognition", "Peer Learning", "Collaborative Learning", "Feedback",
    "Teacher-Student Relationship", "Classroom Management", "Behavior Modification", "Special Education", "Inclusive Education", "Gifted Education", "Learning Disabilities", "Emotional Intelligence in Education", "Resilience in Students", "Student Engagement",
    "Dropout Prevention", "Curriculum Development", "Instructional Strategies", "Educational Assessment", "Teacher Effectiveness", "Parental Involvement", "School Climate", "School Psychology", "Positive Behavior Interventions", "Counseling in Schools",
    "Crisis Intervention in Schools", "Bullying Prevention", "Social Skills Training", "Career Counseling", "Cultural Competence in Education", "Educational Research", "Ethics in Education", "Lifelong Learning", "Adult Learning Theory"
  ],
  "Community Psychology": [
    "Community Psychology", "Social Justice", "Community Development", "Social Support", "Community Mental Health", "Preventive Psychology", "Empowerment", "Collective Efficacy", "Advocacy", "Social Change",
    "Intervention Strategies", "Community Assessment", "Participatory Research", "Cultural Competence", "Community-Based Participatory Research", "Program Evaluation", "Resource Mobilization", "Community Organizing", "Conflict Resolution", "Collaboration",
    "Self-Help Groups", "Support Networks", "Community Resilience", "Public Health Psychology", "Crisis Management", "Environmental Psychology", "Sustainable Development", "Cultural Diversity", "Social Norms", "Community Identity",
    "Social Cohesion", "Intergroup Relations", "Discrimination", "Inclusion", "Social Policy", "Social Movements", "Public Awareness", "Mental Health Promotion", "Youth Empowerment", "Community-Based Interventions",
    "Health Disparities", "Community Resources", "Community Education", "Policy Advocacy", "Collaboration with Stakeholders", "Crisis Response", "Community Health", "Mental Health Services", "Social Capital"
  ],
  "Rehabilitation Psychology": [
    "Rehabilitation Psychology", "Disability Studies", "Psychosocial Rehabilitation", "Clinical Rehabilitation", "Physical Rehabilitation", "Vocational Rehabilitation", "Counseling for Disabilities", "Assistive Technology", "Chronic Illness", "Quality of Life",
    "Adjustment to Disability", "Neuropsychological Rehabilitation", "Rehabilitation Interventions", "Rehabilitation Counseling", "Community-Based Rehabilitation", "Physical Therapy", "Occupational Therapy", "Speech Therapy", "Mental Health Disorders", "Disability Rights",
    "Independent Living", "Access to Services", "Integrated Health Care", "Holistic Approaches", "Family Support", "Peer Support", "Resilience in Rehabilitation", "Motivational Interviewing", "Behavioral Interventions", "Rehabilitation Outcomes",
    "Social Reintegration", "Health Promotion", "Client-Centered Care", "Trauma-Informed Care", "Barriers to Rehabilitation", "Healthcare Access", "Self-Management Strategies", "Psychoeducation", "Psychosocial Support", "Collaboration in Rehabilitation"
  ],
  "Application of Psychology to Disadvantaged Groups": [
    "Disadvantaged Groups", "Social Inequality", "Psychosocial Interventions", "Cultural Sensitivity", "Access to Services", "Community Resources", "Advocacy", "Social Justice", "Marginalized Communities", "Vulnerable Populations",
    "Empowerment Strategies", "Cultural Competence", "Inclusive Practices", "Systemic Barriers", "Mental Health Disparities", "Access to Education", "Employment Opportunities", "Health Disparities", "Social Integration", "Community Engagement",
    "Participatory Approaches", "Community Development", "Grassroots Movements", "Policy Advocacy", "Public Awareness Campaigns", "Crisis Intervention", "Trauma-Informed Care", "Social Support Systems", "Self-Help Initiatives", "Capacity Building",
    "Psychological Resilience", "Empathy in Practice", "Culturally Relevant Interventions", "Research and Evaluation", "Intersectionality", "Social Norms", "Prejudice and Discrimination", "Crisis Response", "Community Healing", "Collaborative Approaches",
    "Social Movements", "Health Literacy", "Psychological First Aid", "Integration into Society", "Equity in Mental Health Services", "Youth Empowerment", "Crisis Counseling", "Substance Use Prevention", "Public Health Initiatives"
  ],
  "Psychological Problems of Social Integration": [
    "Social Integration", "Community Psychology", "Mental Health Issues", "Social Support", "Cultural Identity", "Social Exclusion", "Marginalization", "Prejudice", "Discrimination", "Integration Strategies",
    "Community Cohesion", "Intergroup Relations", "Social Cohesion", "Psychological Adjustment", "Coping Mechanisms", "Emotional Resilience", "Cultural Adaptation", "Identity Conflict", "Social Capital", "Group Dynamics",
    "Behavioral Health", "Social Identity Theory", "Collective Efficacy", "Interpersonal Relationships", "Social Networks", "Community Involvement", "Support Systems", "Access to Resources", "Social Norms", "Public Policy",
    "Psychosocial Support", "Empowerment Programs", "Community Building", "Crisis Management", "Cultural Competence", "Educational Opportunities", "Economic Disparities", "Mental Health Advocacy", "Well-Being in Communities", "Collaboration",
    "Public Awareness", "Social Justice", "Inclusion Policies", "Community Engagement", "Supportive Environments", "Psychological Well-Being", "Therapeutic Interventions", "Social Change", "Resilience Building", "Rehabilitation Services"
  ],
  "Application of Psychology in Information Technology and Mass Media": [
    "Media Psychology", "Information Processing", "Digital Behavior", "Social Media Impact", "Cyberpsychology", "Online Communication", "Virtual Reality", "User Experience", "Human-Computer Interaction", "Digital Well-Being",
    "Information Overload", "Media Effects", "Persuasion in Media", "Advertising Psychology", "Consumer Behavior", "Cyberbullying", "Addiction to Technology", "Online Identity", "Social Media Influence", "Digital Literacy",
    "Online Communities", "Content Creation", "Ethics in Media", "Media Literacy", "Behavioral Targeting", "Data Privacy", "Digital Marketing", "Emotional Impact of Media", "Virtual Communities", "Online Learning",
    "Gamification", "E-therapy", "Social Networking", "User Engagement", "Information Security", "Social Media Marketing", "Digital Storytelling", "Cognitive Dissonance", "Crisis Communication", "Social Influence",
    "Cognitive Biases in Media", "Public Relations", "Psychological Effects of Advertising", "Interactive Media", "Behavior Change Techniques", "Media Consumption Patterns", "Cultural Representation in Media", "Ethical Considerations in Technology"
  ],
  "Psychology and Economic Development": [
    "Economic Psychology", "Behavioral Economics", "Consumer Decision-Making", "Cognitive Biases", "Financial Literacy", "Psychology of Saving", "Spending Behavior", "Investment Behavior", "Risk Perception", "Economic Well-Being",
    "Social Capital", "Community Development", "Motivation and Work", "Workplace Behavior", "Job Satisfaction", "Organizational Commitment", "Employee Engagement", "Work-Life Balance", "Motivation Theories", "Job Performance",
    "Economic Disparities", "Poverty Psychology", "Wealth Inequality", "Consumer Behavior Theories", "Cultural Influences on Economics", "Human Capital", "Education and Economic Growth", "Labor Market Dynamics", "Behavioral Finance", "Entrepreneurship Psychology",
    "Social Entrepreneurship", "Psychological Barriers to Development", "Community Resilience", "Economic Policy", "Health and Economic Outcomes", "Globalization Effects", "Cultural Dimensions in Economics", "Public Policy Psychology", "Sustainability Psychology"
  ],
  "Application of Psychology to Environment and Related Fields": [
    "Environmental Psychology", "Sustainable Behavior", "Psychology of Conservation", "Environmental Stressors", "Place Attachment", "Human-Environment Interaction", "Urban Psychology", "Nature Exposure", "Green Psychology", "Cognitive Mapping",
    "Environmental Perception", "Community Engagement", "Sustainable Development Goals", "Environmental Education", "Eco-Friendly Practices", "Pro-environmental Behavior", "Climate Change Psychology", "Behavior Change for Sustainability", "Public Participation", "Resource Management",
    "Environmental Awareness", "Social Norms and the Environment", "Psychological Barriers to Sustainability", "Disaster Psychology", "Ecopsychology", "Environmental Justice", "Nature Therapy", "Outdoor Recreation", "Community Resilience",
    "Urban Planning and Psychology", "Public Policy for Sustainability", "Environmental Attitudes", "Cognitive Dissonance in Environmental Issues", "Sustainability Communication", "Collective Action for the Environment", "Green Marketing", "Environmental Ethics"
  ],
  "Application of Psychology in Other Fields": [
    "Sport Psychology", "Performance Anxiety", "Motivation in Sports", "Team Dynamics", "Coping Strategies", "Resilience in Athletes", "Mental Training Techniques", "Psychological Recovery", "Sport Injury Rehabilitation", "Leadership in Sports",
    "Military Psychology", "Combat Stress", "Crisis Negotiation", "Psychological Operations", "Resilience Training", "Post-Traumatic Stress Disorder", "War Psychology", "Group Cohesion", "Leadership and Decision Making", "Cultural Competence in Military",
    "Investigative Psychology", "Criminal Behavior Analysis", "Victimology", "Psychological Profiling", "Forensic Psychology", "Decision Making under Stress", "Behavioral Evidence Analysis", "Crisis Intervention", "Interview Techniques", "Witness Psychology",
    "Public Safety Psychology", "Disaster Response Psychology", "Human Factors in Investigations", "Negotiation Skills", "Crisis Communication", "Psychological Impact of Crime", "Community Policing", "Behavioral Analysis in Security"
  ],
  "Psychological Well-Being and Mental Disorders": [
    "Mental Health", "Psychological Well-Being", "Positive Psychology", "Mental Disorders", "Coping Mechanisms", "Resilience", "Therapeutic Approaches", "Psychotherapy", "Cognitive Behavioral Therapy", "Mindfulness",
    "Stress Management", "Anxiety Disorders", "Mood Disorders", "Personality Disorders", "Schizophrenia", "Substance Use Disorders", "Psychosocial Interventions", "Community Mental Health", "Crisis Intervention", "Prevention Strategies",
    "Stigma and Mental Health", "Mental Health Policies", "Access to Mental Health Services", "Integrated Care", "Family Support in Mental Health", "Quality of Life", "Psychosocial Support", "Self-Care Practices", "Mental Health Education",
    "Cultural Considerations in Mental Health", "Psychiatric Rehabilitation", "Trauma-Informed Care", "Emotional Regulation", "Self-Compassion", "Psychological Assessments", "Community Support Groups", "Workplace Mental Health", "Public Awareness Campaigns"
  ]
};


const psychologyPYQData = {
  "2023": {
    "Paper I": [
      "Define psychology and its goals. (10 marks)",
      "Compare classical and operant conditioning theories. (10 marks)",
      "Discuss the influence of culture on perception. (15 marks)",
      "Describe the role of memory in cognitive development. (15 marks)",
      "Explain different theories of motivation. (15 marks)",
      "How does emotional intelligence impact workplace behavior? (15 marks)",
      "Define personality and discuss any two theories of personality. (15 marks)"
    ],
    "Paper II": [
      "Explain the importance of counseling in educational psychology. (10 marks)",
      "Discuss the application of psychology in legal settings. (15 marks)",
      "What is the role of psychology in public health campaigns? (15 marks)",
      "Discuss various therapeutic techniques used in clinical psychology. (20 marks)"
    ]
  },
  "2022": {
    "Paper I": [
      "Define and differentiate between sensation and perception. (10 marks)",
      "Discuss the concept of intelligence and its measurement. (15 marks)",
      "Explain the psychodynamic approach to psychology. (15 marks)",
      "Describe the stages of cognitive development according to Piaget. (15 marks)",
      "What is positive reinforcement? Discuss its applications in behavior modification. (15 marks)"
    ],
    "Paper II": [
      "Explain the role of psychology in disaster management. (10 marks)",
      "Discuss psychological factors affecting health and illness. (20 marks)",
      "Describe the impact of mass media on attitude formation. (15 marks)",
      "Explain the application of psychological principles in organizational behavior. (15 marks)"
    ]
  },
  "2021": {
    "Paper I": [
      "Define abnormal psychology and explain its scope. (10 marks)",
      "Compare the trait and type theories of personality. (15 marks)",
      "Discuss the concept of attitudes and how they change. (15 marks)",
      "What is learned helplessness? How does it impact behavior? (15 marks)",
      "Explain the stages of group development and its importance. (15 marks)"
    ],
    "Paper II": [
      "Discuss the role of psychology in the criminal justice system. (10 marks)",
      "Explain the psychological impact of social media on adolescents. (20 marks)",
      "Describe the influence of gender roles on psychological development. (15 marks)",
      "What are the psychological challenges of old age? (15 marks)"
    ]
  },
  "2020": {
    "Paper I": [
      "What is the scientific method? Discuss its application in psychology. (10 marks)",
      "Explain the concept of intelligence quotient (IQ) and its importance. (15 marks)",
      "Discuss the role of heredity and environment in the development of personality. (15 marks)",
      "What is the role of cognitive dissonance in attitude change? (15 marks)",
      "Describe the psychodynamic and behavioral approaches to therapy. (15 marks)"
    ],
    "Paper II": [
      "Explain the role of psychology in the workplace. (10 marks)",
      "How does psychology contribute to understanding human rights issues? (15 marks)",
      "Discuss the role of clinical psychology in mental health care. (20 marks)",
      "Describe the psychological effects of unemployment. (15 marks)"
    ]
  },
  "2019": {
    "Paper I": [
      "Define social psychology and discuss its relevance in today’s world. (10 marks)",
      "Explain the stages of cognitive development in children according to Vygotsky. (15 marks)",
      "Compare the biological and psychological theories of emotion. (15 marks)",
      "What is observational learning? Discuss its significance. (15 marks)",
      "Explain the concept of defense mechanisms according to Freud. (15 marks)"
    ],
    "Paper II": [
      "Describe the role of psychology in dealing with terrorism. (10 marks)",
      "Discuss the psychological effects of addiction and rehabilitation. (20 marks)",
      "Explain how psychology can help in improving the quality of education. (15 marks)",
      "What is the role of psychology in enhancing sports performance? (15 marks)"
    ]
  },
  "2018": {
    "Paper I": [
      "What are the goals of psychological research? (10 marks)",
      "Discuss the theory of multiple intelligences by Howard Gardner. (15 marks)",
      "Explain the role of motivation in learning. (15 marks)",
      "What are projective techniques? Discuss their relevance in personality assessment. (15 marks)",
      "Explain the stages of moral development according to Kohlberg. (15 marks)"
    ],
    "Paper II": [
      "Discuss the role of psychology in policy making and governance. (10 marks)",
      "What are the psychological factors that influence consumer behavior? (20 marks)",
      "Explain the role of social psychology in addressing social issues. (15 marks)",
      "Describe the psychological impact of urbanization. (15 marks)"
    ]
  }
};




