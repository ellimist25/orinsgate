// Namespace Configuration Values
export const OrinsGate = {};

// ASCII Artwork
OrinsGate.ASCII = `_______________________________
______      ______ _____ _____ 
|  _  \\___  |  _  \\  ___|  ___|
| | | ( _ ) | | | |___ \\| |__  
| | | / _ \\/\\ | | |   \\ \\  __| 
| |/ / (_>  < |/ //\\__/ / |___ 
|___/ \\___/\\/___/ \\____/\\____/
_______________________________`;


/**
 * The set of Ability Scores used within the system
 * @type {Object}
 */
OrinsGate.abilities = {
  "str": "OrinsGate.AbilityStr",
  "dex": "OrinsGate.AbilityDex",
  "con": "OrinsGate.AbilityCon",
  "int": "OrinsGate.AbilityInt",
  "wis": "OrinsGate.AbilityWis",
  "cha": "OrinsGate.AbilityCha"
};

OrinsGate.abilityAbbreviations = {
  "str": "OrinsGate.AbilityStrAbbr",
  "dex": "OrinsGate.AbilityDexAbbr",
  "con": "OrinsGate.AbilityConAbbr",
  "int": "OrinsGate.AbilityIntAbbr",
  "wis": "OrinsGate.AbilityWisAbbr",
  "cha": "OrinsGate.AbilityChaAbbr"
};

/* -------------------------------------------- */

/**
 * Character alignment options
 * @type {Object}
 */
OrinsGate.alignments = {
  'lg': "OrinsGate.AlignmentLG",
  'ng': "OrinsGate.AlignmentNG",
  'cg': "OrinsGate.AlignmentCG",
  'ln': "OrinsGate.AlignmentLN",
  'tn': "OrinsGate.AlignmentTN",
  'cn': "OrinsGate.AlignmentCN",
  'le': "OrinsGate.AlignmentLE",
  'ne': "OrinsGate.AlignmentNE",
  'ce': "OrinsGate.AlignmentCE"
};


OrinsGate.weaponProficiencies = {
  "sim": "OrinsGate.WeaponSimpleProficiency",
  "mar": "OrinsGate.WeaponMartialProficiency"
};

OrinsGate.toolProficiencies = {
  "art": "OrinsGate.ToolArtisans",
  "disg": "OrinsGate.ToolDisguiseKit",
  "forg": "OrinsGate.ToolForgeryKit",
  "game": "OrinsGate.ToolGamingSet",
  "herb": "OrinsGate.ToolHerbalismKit",
  "music": "OrinsGate.ToolMusicalInstrument",
  "navg": "OrinsGate.ToolNavigators",
  "pois": "OrinsGate.ToolPoisonersKit",
  "thief": "OrinsGate.ToolThieves",
  "vehicle": "OrinsGate.ToolVehicle"
};


/* -------------------------------------------- */

/**
 * This Object defines the various lengths of time which can occur
 * @type {Object}
 */
OrinsGate.timePeriods = {
  "inst": "OrinsGate.TimeInst",
  "turn": "OrinsGate.TimeTurn",
  "round": "OrinsGate.TimeRound",
  "minute": "OrinsGate.TimeMinute",
  "hour": "OrinsGate.TimeHour",
  "day": "OrinsGate.TimeDay",
  "month": "OrinsGate.TimeMonth",
  "year": "OrinsGate.TimeYear",
  "perm": "OrinsGate.TimePerm",
  "spec": "OrinsGate.Special"
};


/* -------------------------------------------- */

/**
 * This describes the ways that an ability can be activated
 * @type {Object}
 */
OrinsGate.abilityActivationTypes = {
  "none": "OrinsGate.None",
  "action": "OrinsGate.Action",
  "bonus": "OrinsGate.BonusAction",
  "reaction": "OrinsGate.Reaction",
  "minute": OrinsGate.timePeriods.minute,
  "hour": OrinsGate.timePeriods.hour,
  "day": OrinsGate.timePeriods.day,
  "special": OrinsGate.timePeriods.spec,
  "legendary": "OrinsGate.LegAct",
  "lair": "OrinsGate.LairAct",
  "crew": "OrinsGate.VehicleCrewAction"
};

/* -------------------------------------------- */


OrinsGate.abilityConsumptionTypes = {
  "ammo": "OrinsGate.ConsumeAmmunition",
  "attribute": "OrinsGate.ConsumeAttribute",
  "material": "OrinsGate.ConsumeMaterial",
  "charges": "OrinsGate.ConsumeCharges"
};


/* -------------------------------------------- */

// Creature Sizes
OrinsGate.actorSizes = {
  "tiny": "OrinsGate.SizeTiny",
  "sm": "OrinsGate.SizeSmall",
  "med": "OrinsGate.SizeMedium",
  "lg": "OrinsGate.SizeLarge",
  "huge": "OrinsGate.SizeHuge",
  "grg": "OrinsGate.SizeGargantuan"
};

OrinsGate.tokenSizes = {
  "tiny": 1,
  "sm": 1,
  "med": 1,
  "lg": 2,
  "huge": 3,
  "grg": 4
};

/* -------------------------------------------- */

/**
 * Classification types for item action types
 * @type {Object}
 */
OrinsGate.itemActionTypes = {
  "mwak": "OrinsGate.ActionMWAK",
  "rwak": "OrinsGate.ActionRWAK",
  "msak": "OrinsGate.ActionMSAK",
  "rsak": "OrinsGate.ActionRSAK",
  "save": "OrinsGate.ActionSave",
  "heal": "OrinsGate.ActionHeal",
  "abil": "OrinsGate.ActionAbil",
  "util": "OrinsGate.ActionUtil",
  "other": "OrinsGate.ActionOther"
};

/* -------------------------------------------- */

OrinsGate.itemCapacityTypes = {
  "items": "OrinsGate.ItemContainerCapacityItems",
  "weight": "OrinsGate.ItemContainerCapacityWeight"
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability
 * @type {Object}
 */
OrinsGate.limitedUsePeriods = {
  "sr": "OrinsGate.ShortRest",
  "lr": "OrinsGate.LongRest",
  "day": "OrinsGate.Day",
  "charges": "OrinsGate.Charges"
};


/* -------------------------------------------- */

/**
 * The set of equipment types for armor, clothing, and other objects which can ber worn by the character
 * @type {Object}
 */
OrinsGate.equipmentTypes = {
  "light": "OrinsGate.EquipmentLight",
  "medium": "OrinsGate.EquipmentMedium",
  "heavy": "OrinsGate.EquipmentHeavy",
  "bonus": "OrinsGate.EquipmentBonus",
  "natural": "OrinsGate.EquipmentNatural",
  "shield": "OrinsGate.EquipmentShield",
  "clothing": "OrinsGate.EquipmentClothing",
  "trinket": "OrinsGate.EquipmentTrinket",
  "vehicle": "OrinsGate.EquipmentVehicle"
};


/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have
 * @type {Object}
 */
OrinsGate.armorProficiencies = {
  "lgt": OrinsGate.equipmentTypes.light,
  "med": OrinsGate.equipmentTypes.medium,
  "hvy": OrinsGate.equipmentTypes.heavy,
  "shl": "OrinsGate.EquipmentShieldProficiency"
};


/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system
 * @type {Object}
 */
OrinsGate.consumableTypes = {
  "ammo": "OrinsGate.ConsumableAmmunition",
  "potion": "OrinsGate.ConsumablePotion",
  "poison": "OrinsGate.ConsumablePoison",
  "food": "OrinsGate.ConsumableFood",
  "scroll": "OrinsGate.ConsumableScroll",
  "wand": "OrinsGate.ConsumableWand",
  "rod": "OrinsGate.ConsumableRod",
  "trinket": "OrinsGate.ConsumableTrinket"
};

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the 5e system
 * @type {Object}
 */
OrinsGate.currencies = {
  "pp": "OrinsGate.CurrencyPP",
  "gp": "OrinsGate.CurrencyGP",
  "ep": "OrinsGate.CurrencyEP",
  "sp": "OrinsGate.CurrencySP",
  "cp": "OrinsGate.CurrencyCP",
};


/**
 * Define the upwards-conversion rules for registered currency types
 * @type {{string, object}}
 */
OrinsGate.currencyConversion = {
  cp: {into: "sp", each: 10},
  sp: {into: "ep", each: 5 },
  ep: {into: "gp", each: 2 },
  gp: {into: "pp", each: 10}
};

/* -------------------------------------------- */


// Damage Types
OrinsGate.damageTypes = {
  "acid": "OrinsGate.DamageAcid",
  "bludgeoning": "OrinsGate.DamageBludgeoning",
  "cold": "OrinsGate.DamageCold",
  "fire": "OrinsGate.DamageFire",
  "force": "OrinsGate.DamageForce",
  "lightning": "OrinsGate.DamageLightning",
  "necrotic": "OrinsGate.DamageNecrotic",
  "piercing": "OrinsGate.DamagePiercing",
  "poison": "OrinsGate.DamagePoison",
  "psychic": "OrinsGate.DamagePsychic",
  "radiant": "OrinsGate.DamageRadiant",
  "slashing": "OrinsGate.DamageSlashing",
  "thunder": "OrinsGate.DamageThunder"
};

// Damage Resistance Types
OrinsGate.damageResistanceTypes = mergeObject(duplicate(OrinsGate.damageTypes), {
  "physical": "OrinsGate.DamagePhysical"
});


/* -------------------------------------------- */

OrinsGate.distanceUnits = {
  "none": "OrinsGate.None",
  "self": "OrinsGate.DistSelf",
  "touch": "OrinsGate.DistTouch",
  "ft": "OrinsGate.DistFt",
  "mi": "OrinsGate.DistMi",
  "spec": "OrinsGate.Special",
  "any": "OrinsGate.DistAny"
};

/* -------------------------------------------- */


/**
 * Configure aspects of encumbrance calculation so that it could be configured by modules
 * @type {Object}
 */
OrinsGate.encumbrance = {
  currencyPerWeight: 50,
  strMultiplier: 15,
  vehicleWeightMultiplier: 2000 // 2000 lbs in a ton
};

/* -------------------------------------------- */

/**
 * This Object defines the types of single or area targets which can be applied
 * @type {Object}
 */
OrinsGate.targetTypes = {
  "none": "OrinsGate.None",
  "self": "OrinsGate.TargetSelf",
  "creature": "OrinsGate.TargetCreature",
  "ally": "OrinsGate.TargetAlly",
  "enemy": "OrinsGate.TargetEnemy",
  "object": "OrinsGate.TargetObject",
  "space": "OrinsGate.TargetSpace",
  "radius": "OrinsGate.TargetRadius",
  "sphere": "OrinsGate.TargetSphere",
  "cylinder": "OrinsGate.TargetCylinder",
  "cone": "OrinsGate.TargetCone",
  "square": "OrinsGate.TargetSquare",
  "cube": "OrinsGate.TargetCube",
  "line": "OrinsGate.TargetLine",
  "wall": "OrinsGate.TargetWall"
};


/* -------------------------------------------- */


/**
 * Map the subset of target types which produce a template area of effect
 * The keys are OrinsGate target types and the values are MeasuredTemplate shape types
 * @type {Object}
 */
OrinsGate.areaTargetTypes = {
  cone: "cone",
  cube: "rect",
  cylinder: "circle",
  line: "ray",
  radius: "circle",
  sphere: "circle",
  square: "rect",
  wall: "ray"
};


/* -------------------------------------------- */

// Healing Types
OrinsGate.healingTypes = {
  "healing": "OrinsGate.Healing",
  "temphp": "OrinsGate.HealingTemp"
};


/* -------------------------------------------- */


/**
 * Enumerate the denominations of hit dice which can apply to classes
 * @type {Array.<string>}
 */
OrinsGate.hitDieTypes = ["d6", "d8", "d10", "d12"];


/* -------------------------------------------- */

/**
 * Character senses options
 * @type {Object}
 */
OrinsGate.senses = {
  "bs": "OrinsGate.SenseBS",
  "dv": "OrinsGate.SenseDV",
  "ts": "OrinsGate.SenseTS",
  "tr": "OrinsGate.SenseTR"
};


/* -------------------------------------------- */

/**
 * The set of skill which can be trained
 * @type {Object}
 */
OrinsGate.skills = {
  "acr": "OrinsGate.SkillAcr",
  "ani": "OrinsGate.SkillAni",
  "arc": "OrinsGate.SkillArc",
  "ath": "OrinsGate.SkillAth",
  "dec": "OrinsGate.SkillDec",
  "his": "OrinsGate.SkillHis",
  "ins": "OrinsGate.SkillIns",
  "itm": "OrinsGate.SkillItm",
  "inv": "OrinsGate.SkillInv",
  "med": "OrinsGate.SkillMed",
  "nat": "OrinsGate.SkillNat",
  "prc": "OrinsGate.SkillPrc",
  "prf": "OrinsGate.SkillPrf",
  "per": "OrinsGate.SkillPer",
  "rel": "OrinsGate.SkillRel",
  "slt": "OrinsGate.SkillSlt",
  "ste": "OrinsGate.SkillSte",
  "sur": "OrinsGate.SkillSur"
};


/* -------------------------------------------- */

OrinsGate.powerPreparationModes = {
  "always": "OrinsGate.PowerPrepAlways",
  "atwill": "OrinsGate.PowerPrepAtWill",
  "innate": "OrinsGate.PowerPrepInnate",
  "pact": "OrinsGate.PactMagic",
  "prepared": "OrinsGate.PowerPrepPrepared"
};

OrinsGate.powerUpcastModes = ["always", "pact", "prepared"];


OrinsGate.powerProgression = {
  "none": "OrinsGate.PowerNone",
  "full": "OrinsGate.PowerProgFull",
  "half": "OrinsGate.PowerProgHalf",
  "third": "OrinsGate.PowerProgThird",
  "pact": "OrinsGate.PowerProgPact",
  "artificer": "OrinsGate.PowerProgArt"
};

/* -------------------------------------------- */

/**
 * The available choices for how power damage scaling may be computed
 * @type {Object}
 */
OrinsGate.powerScalingModes = {
  "none": "OrinsGate.PowerNone",
  "cantrip": "OrinsGate.PowerCantrip",
  "level": "OrinsGate.PowerLevel"
};

/* -------------------------------------------- */


/**
 * Define the set of types which a weapon item can take
 * @type {Object}
 */
OrinsGate.weaponTypes = {
  "simpleM": "OrinsGate.WeaponSimpleM",
  "simpleR": "OrinsGate.WeaponSimpleR",
  "martialM": "OrinsGate.WeaponMartialM",
  "martialR": "OrinsGate.WeaponMartialR",
  "natural": "OrinsGate.WeaponNatural",
  "improv": "OrinsGate.WeaponImprov",
  "siege": "OrinsGate.WeaponSiege"
};


/* -------------------------------------------- */

/**
 * Define the set of weapon property flags which can exist on a weapon
 * @type {Object}
 */
OrinsGate.weaponProperties = {
  "amm": "OrinsGate.WeaponPropertiesAmm",
  "hvy": "OrinsGate.WeaponPropertiesHvy",
  "fin": "OrinsGate.WeaponPropertiesFin",
  "fir": "OrinsGate.WeaponPropertiesFir",
  "foc": "OrinsGate.WeaponPropertiesFoc",
  "lgt": "OrinsGate.WeaponPropertiesLgt",
  "lod": "OrinsGate.WeaponPropertiesLod",
  "rch": "OrinsGate.WeaponPropertiesRch",
  "rel": "OrinsGate.WeaponPropertiesRel",
  "ret": "OrinsGate.WeaponPropertiesRet",
  "spc": "OrinsGate.WeaponPropertiesSpc",
  "thr": "OrinsGate.WeaponPropertiesThr",
  "two": "OrinsGate.WeaponPropertiesTwo",
  "ver": "OrinsGate.WeaponPropertiesVer"
};


// Power Components
OrinsGate.powerComponents = {
  "V": "OrinsGate.ComponentVerbal",
  "S": "OrinsGate.ComponentSomatic",
  "M": "OrinsGate.ComponentMaterial"
};

// Power Schools
OrinsGate.powerSchools = {
  "abj": "OrinsGate.SchoolAbj",
  "con": "OrinsGate.SchoolCon",
  "div": "OrinsGate.SchoolDiv",
  "enc": "OrinsGate.SchoolEnc",
  "evo": "OrinsGate.SchoolEvo",
  "ill": "OrinsGate.SchoolIll",
  "nec": "OrinsGate.SchoolNec",
  "trs": "OrinsGate.SchoolTrs"
};

// Power Levels
OrinsGate.powerLevels = {
  0: "OrinsGate.PowerLevel0",
  1: "OrinsGate.PowerLevel1",
  2: "OrinsGate.PowerLevel2",
  3: "OrinsGate.PowerLevel3",
  4: "OrinsGate.PowerLevel4",
  5: "OrinsGate.PowerLevel5",
  6: "OrinsGate.PowerLevel6",
  7: "OrinsGate.PowerLevel7",
  8: "OrinsGate.PowerLevel8",
  9: "OrinsGate.PowerLevel9"
};

// Power Scroll Compendium UUIDs
OrinsGate.powerScrollIds = {
  0: 'Compendium.orinsgate.items.rQ6sO7HDWzqMhSI3',
  1: 'Compendium.orinsgate.items.9GSfMg0VOA2b4uFN',
  2: 'Compendium.orinsgate.items.XdDp6CKh9qEvPTuS',
  3: 'Compendium.orinsgate.items.hqVKZie7x9w3Kqds',
  4: 'Compendium.orinsgate.items.DM7hzgL836ZyUFB1',
  5: 'Compendium.orinsgate.items.wa1VF8TXHmkrrR35',
  6: 'Compendium.orinsgate.items.tI3rWx4bxefNCexS',
  7: 'Compendium.orinsgate.items.mtyw4NS1s7j2EJaD',
  8: 'Compendium.orinsgate.items.aOrinPg7yuDZEuWr',
  9: 'Compendium.orinsgate.items.O4YbkJkLlnsgUszZ'
};

/**
 * Define the standard slot progression by character level.
 * The entries of this array represent the power slot progression for a full power-caster.
 * @type {Array[]}
 */
OrinsGate.SPELL_SLOT_TABLE = [
  [2],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1]
];

/* -------------------------------------------- */

// Polymorph options.
OrinsGate.polymorphSettings = {
  keepPhysical: 'OrinsGate.PolymorphKeepPhysical',
  keepMental: 'OrinsGate.PolymorphKeepMental',
  keepSaves: 'OrinsGate.PolymorphKeepSaves',
  keepSkills: 'OrinsGate.PolymorphKeepSkills',
  mergeSaves: 'OrinsGate.PolymorphMergeSaves',
  mergeSkills: 'OrinsGate.PolymorphMergeSkills',
  keepClass: 'OrinsGate.PolymorphKeepClass',
  keepFeats: 'OrinsGate.PolymorphKeepFeats',
  keepPowers: 'OrinsGate.PolymorphKeepPowers',
  keepItems: 'OrinsGate.PolymorphKeepItems',
  keepBio: 'OrinsGate.PolymorphKeepBio',
  keepVision: 'OrinsGate.PolymorphKeepVision'
};

/* -------------------------------------------- */

/**
 * Skill, ability, and tool proficiency levels
 * Each level provides a proficiency multiplier
 * @type {Object}
 */
OrinsGate.proficiencyLevels = {
  0: "OrinsGate.NotProficient",
  1: "OrinsGate.Proficient",
  0.5: "OrinsGate.HalfProficient",
  2: "OrinsGate.Expertise"
};

/* -------------------------------------------- */

/**
 * The amount of cover provided by an object.
 * In cases where multiple pieces of cover are
 * in play, we take the highest value.
 */
OrinsGate.cover = {
  0: 'OrinsGate.None',
  .5: 'OrinsGate.CoverHalf',
  .75: 'OrinsGate.CoverThreeQuarters',
  1: 'OrinsGate.CoverTotal'
};

/* -------------------------------------------- */


// Condition Types
OrinsGate.conditionTypes = {
  "blinded": "OrinsGate.ConBlinded",
  "charmed": "OrinsGate.ConCharmed",
  "deafened": "OrinsGate.ConDeafened",
  "diseased": "OrinsGate.ConDiseased",
  "exhaustion": "OrinsGate.ConExhaustion",
  "frightened": "OrinsGate.ConFrightened",
  "grappled": "OrinsGate.ConGrappled",
  "incapacitated": "OrinsGate.ConIncapacitated",
  "invisible": "OrinsGate.ConInvisible",
  "paralyzed": "OrinsGate.ConParalyzed",
  "petrified": "OrinsGate.ConPetrified",
  "poisoned": "OrinsGate.ConPoisoned",
  "prone": "OrinsGate.ConProne",
  "restrained": "OrinsGate.ConRestrained",
  "stunned": "OrinsGate.ConStunned",
  "unconscious": "OrinsGate.ConUnconscious"
};

// Languages
OrinsGate.languages = {
  "common": "OrinsGate.LanguagesCommon",
  "aarakocra": "OrinsGate.LanguagesAarakocra",
  "abyssal": "OrinsGate.LanguagesAbyssal",
  "aquan": "OrinsGate.LanguagesAquan",
  "auran": "OrinsGate.LanguagesAuran",
  "celestial": "OrinsGate.LanguagesCelestial",
  "deep": "OrinsGate.LanguagesDeepSpeech",
  "draconic": "OrinsGate.LanguagesDraconic",
  "druidic": "OrinsGate.LanguagesDruidic",
  "dwarvish": "OrinsGate.LanguagesDwarvish",
  "elvish": "OrinsGate.LanguagesElvish",
  "giant": "OrinsGate.LanguagesGiant",
  "gith": "OrinsGate.LanguagesGith",
  "gnomish": "OrinsGate.LanguagesGnomish",
  "goblin": "OrinsGate.LanguagesGoblin",
  "gnoll": "OrinsGate.LanguagesGnoll",
  "halfling": "OrinsGate.LanguagesHalfling",
  "ignan": "OrinsGate.LanguagesIgnan",
  "infernal": "OrinsGate.LanguagesInfernal",
  "orc": "OrinsGate.LanguagesOrc",
  "primordial": "OrinsGate.LanguagesPrimordial",
  "sylvan": "OrinsGate.LanguagesSylvan",
  "terran": "OrinsGate.LanguagesTerran",
  "cant": "OrinsGate.LanguagesThievesCant",
  "undercommon": "OrinsGate.LanguagesUndercommon"
};

// Character Level XP Requirements
OrinsGate.CHARACTER_EXP_LEVELS =  [
  0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
  120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000]
;

// Challenge Rating XP Levels
OrinsGate.CR_EXP_LEVELS = [
  10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000,
  20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
];

// Configure Optional Character Flags
OrinsGate.characterFlags = {
  "powerfulBuild": {
    name: "OrinsGate.FlagsPowerfulBuild",
    hint: "OrinsGate.FlagsPowerfulBuildHint",
    section: "Racial Traits",
    type: Boolean
  },
  "savageAttacks": {
    name: "OrinsGate.FlagsSavageAttacks",
    hint: "OrinsGate.FlagsSavageAttacksHint",
    section: "Racial Traits",
    type: Boolean
  },
  "elvenAccuracy": {
    name: "OrinsGate.FlagsElvenAccuracy",
    hint: "OrinsGate.FlagsElvenAccuracyHint",
    section: "Racial Traits",
    type: Boolean
  },
  "halflingLucky": {
    name: "OrinsGate.FlagsHalflingLucky",
    hint: "OrinsGate.FlagsHalflingLuckyHint",
    section: "Racial Traits",
    type: Boolean
  },
  "initiativeAdv": {
    name: "OrinsGate.FlagsInitiativeAdv",
    hint: "OrinsGate.FlagsInitiativeAdvHint",
    section: "Feats",
    type: Boolean
  },
  "initiativeAlert": {
    name: "OrinsGate.FlagsAlert",
    hint: "OrinsGate.FlagsAlertHint",
    section: "Feats",
    type: Boolean
  },
  "jackOfAllTrades": {
    name: "OrinsGate.FlagsJOAT",
    hint: "OrinsGate.FlagsJOATHint",
    section: "Feats",
    type: Boolean
  },
  "observantFeat": {
    name: "OrinsGate.FlagsObservant",
    hint: "OrinsGate.FlagsObservantHint",
    skills: ['prc','inv'],
    section: "Feats",
    type: Boolean
  },
  "reliableTalent": {
    name: "OrinsGate.FlagsReliableTalent",
    hint: "OrinsGate.FlagsReliableTalentHint",
    section: "Feats",
    type: Boolean
  },
  "remarkableAthlete": {
    name: "OrinsGate.FlagsRemarkableAthlete",
    hint: "OrinsGate.FlagsRemarkableAthleteHint",
    abilities: ['str','dex','con'],
    section: "Feats",
    type: Boolean
  },
  "weaponCriticalThreshold": {
    name: "OrinsGate.FlagsCritThreshold",
    hint: "OrinsGate.FlagsCritThresholdHint",
    section: "Feats",
    type: Number,
    placeholder: 20
  }
};

// Configure allowed status flags
OrinsGate.allowedActorFlags = [
  "isPolymorphed", "originalActor"
].concat(Object.keys(OrinsGate.characterFlags));
