

class Character {

    constructor() {
        this.Name = "";
        this.Level = 1;
        this.HitPoints = 0;
        this.ManaPoints = 0;
        this.StaminaPoints = 0;
        this.Experience = 0;
        this.AvailableAttributePoints = 0;

        this.Race = {
            // May need to be a new class
            type: {
                name: "",
                desc: "",
                subType: {
                    name: "",
                    desc: ""
                }
            }
        }

        this.Attributes = {
            Strength: {
                value: 0,
                desc: "Improves Damage with Melee Weapons and Thrown + all things with Brawn" },
            Agility: {
                value: 0,
                desc: "Improves accuracy of Ranged Weapons Determines Balance Dodge and Stealth" },
            Dexterity: {
                value: 0,
                desc: "Attack Speed, Accuracy of Melee weapons" },
            Constitution: {
                value: 0,
                desc: "Health 10/level, protection from poison and stamina regeneration" },
            Endurance: {
                value: 0,
                desc: "Determines Stamina +10 per level Protects against ill effects and ability to hold breath" },
            Intelligence: {
                value: 0,
                desc: "Mana +10/Level increases mental defense and base intellect" },
            Wisdom: {
                value: 0,
                desc: "Mana Regen effects magical resistance and protection of mental fortitude" },
            Charisma: {
                value: 0,
                desc: "Will increase personal interactions and helps with Dominate Magic." },
            Luck: {
                value: 0,
                desc: "Will affect you in a Million different ways. Luck 1% higher luck/level" }
        }
    }

    addExperience(xpAmountToAdd) {
        this.Experience += xpAmountToAdd;
        var xpToNextLevel = this.getExperienceNeededToNextLevel();
        var xpNextLevelCap = this.getLevelExpCap(this.Level);
        var result = {
            hasLeveledUp: false,
            currentLevel: this.Level,
            currentExprience: this.Experience,
            experienceToNextLevel: xpToNextLevel,
            nextExperienceLevelCap: xpNextLevelCap
        }

        if(xpToNextLevel <= 0) {
            this.Level += 1; //TODO: need to extrapolate this to another function
            result.hasLeveledUp = true;
            result.currentLevel = this.Level;
            result.experienceToNextLevel = this.getExperienceNeededToNextLevel();
            result.nextExperienceLevelCap = this.getLevelExpCap(this.Level);
            //TODO: add lvl up description... preferably from the level up funciton
        }

        return result;
    }

    getExperienceNeededToNextLevel() {
        var expNeededForNextLevel = this.getNextLevelExpCap() - this.Experience;
        return expNeededForNextLevel;
    }

    getNextLevelExpCap() {
        return this.getLevelExpCap(this.Level);
    }

    getLevelExpCap(level) {
        var previousTotalXP = 0;
        if (level > 0) {

            var levelAdjustment = 0;
            var tenthOfLevel = (level / 10);
            var floorOfLevelOffset = Math.floor(tenthOfLevel);

            if(floorOfLevelOffset > 0) {
                levelAdjustment = 1000 * Math.pow(2, floorOfLevelOffset -1);
                levelAdjustment += (level % 10) * 1000;
            }
            var cumulativeSum = (level * 1000);

            previousTotalXP = this.getLevelExpCap(level - 1) + cumulativeSum + levelAdjustment;
        }

        return previousTotalXP;
    }

}

class Human extends Character {

    constructor () {
        super();
        this.Race.type.name = "Human";
        this.Race.type.desc = "Humans are one of the shortest lived, but most prolific breeders in the Land. Humans have a broader affinity for skills than other races. No special bonuses to race. Humans get four points to distribute per level.";

    }

    increaseLevelByOne() {
        this.AvailableAttributePoints += 4;
        //TODO: add other stuff here
    }

}

class ChaosSeed extends Human {
    constructor () {
        super();
        this.Race.type.subType.name = "Chaos Seed";
        this.Race.type.desc = "Chaos seed are sub-race of humans that inhabits the planet Earth. They are born with a seed of Chaos in their soul and excel at destruction. Chaos seeds receive a bonus of 2 attribute points making it 6 as apposed to a normal humans 4 points. this sub race originated from a dimension separate from the land in a world called earth";
    }

    increaseLevelByOne() {
        super.increaseLevelByOne();
        this.AvailableAttributePoints += 2; //Chaos Seed Bonus
        //TODO: add other stuff here
    }
}

/*
class Animal {
    constructor () {
        super();
        this.Race.type.name = "Animal";
        this.Race.type.desc = "Description Here";
    }
}

class Deer {
    constructor() {
        super();
        this.Race.type.subType.name = "Deer";
        this.Race.type.desc = "Description Here";
    }
}*/