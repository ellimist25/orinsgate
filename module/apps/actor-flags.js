/**
 * An application class which provides advanced configuration for special character flags which modify an Actor
 * @extends {BaseEntitySheet}
 */
export default class ActorSheetFlags extends BaseEntitySheet {
  static get defaultOptions() {
    const options = super.defaultOptions;
    return mergeObject(options, {
      id: "actor-flags",
	    classes: ["orinsgate"],
      template: "systems/orinsgate/templates/apps/actor-flags.html",
      width: 500,
      closeOnSubmit: true
    });
  }

  /* -------------------------------------------- */

  /**
   * Configure the title of the special traits selection window to include the Actor name
   * @type {String}
   */
  get title() {
    return `${game.i18n.localize('OrinsGate.FlagsTitle')}: ${this.object.name}`;
  }

  /* -------------------------------------------- */

  /**
   * Prepare data used to render the special Actor traits selection UI
   * @return {Object}
   */
  getData() {
    const data = super.getData();
    data.actor = this.object;
    data.flags = this._getFlags();
    data.bonuses = this._getBonuses();
    return data;
  }

  /* -------------------------------------------- */

  /**
   * Prepare an object of flags data which groups flags by section
   * Add some additional data for rendering
   * @return {Object}
   */
  _getFlags() {
    const flags = {};
    for ( let [k, v] of Object.entries(CONFIG.OrinsGate.characterFlags) ) {
      if ( !flags.hasOwnProperty(v.section) ) flags[v.section] = {};
      let flag = duplicate(v);
      flag.type = v.type.name;
      flag.isCheckbox = v.type === Boolean;
      flag.isSelect = v.hasOwnProperty('choices');
      flag.value = this.entity.getFlag("orinsgate", k);
      flags[v.section][`flags.orinsgate.${k}`] = flag;
    }
    return flags;
  }

  /* -------------------------------------------- */

  /**
   * Get the bonuses fields and their localization strings
   * @return {Array}
   * @private
   */
  _getBonuses() {
    const bonuses = [
      {name: "data.bonuses.mwak.attack", label: "OrinsGate.BonusMWAttack"},
      {name: "data.bonuses.mwak.damage", label: "OrinsGate.BonusMWDamage"},
      {name: "data.bonuses.rwak.attack", label: "OrinsGate.BonusRWAttack"},
      {name: "data.bonuses.rwak.damage", label: "OrinsGate.BonusRWDamage"},
      {name: "data.bonuses.msak.attack", label: "OrinsGate.BonusMSAttack"},
      {name: "data.bonuses.msak.damage", label: "OrinsGate.BonusMSDamage"},
      {name: "data.bonuses.rsak.attack", label: "OrinsGate.BonusRSAttack"},
      {name: "data.bonuses.rsak.damage", label: "OrinsGate.BonusRSDamage"},
      {name: "data.bonuses.abilities.check", label: "OrinsGate.BonusAbilityCheck"},
      {name: "data.bonuses.abilities.save", label: "OrinsGate.BonusAbilitySave"},
      {name: "data.bonuses.abilities.skill", label: "OrinsGate.BonusAbilitySkill"},
      {name: "data.bonuses.power.dc", label: "OrinsGate.BonusPowerDC"}
    ];
    for ( let b of bonuses ) {
      b.value = getProperty(this.object.data, b.name) || "";
    }
    return bonuses;
  }

  /* -------------------------------------------- */

  /**
   * Update the Actor using the configured flags
   * Remove/unset any flags which are no longer configured
   */
  async _updateObject(event, formData) {
    const actor = this.object;
    let updateData = expandObject(formData);

    // Unset any flags which are "false"
    let unset = false;
    const flags = updateData.flags.orinsgate;
    for ( let [k, v] of Object.entries(flags) ) {
      if ( [undefined, null, "", false, 0].includes(v) ) {
        delete flags[k];
        if ( hasProperty(actor.data.flags, `orinsgate.${k}`) ) {
          unset = true;
          flags[`-=${k}`] = null;
        }
      }
    }

    // Clear any bonuses which are whitespace only
    for ( let b of Object.values(updateData.data.bonuses ) ) {
      for ( let [k, v] of Object.entries(b) ) {
        b[k] = v.trim();
      }
    }

    // Diff the data against any applied overrides and apply
    // TODO: Remove this logical gate once 0.7.x is release channel
    if ( !isNewerVersion("0.7.1", game.data.version) ){
      updateData.data = diffObject(this.object.overrides, updateData.data);
    }
    await actor.update(updateData, {diff: false});
  }
}
