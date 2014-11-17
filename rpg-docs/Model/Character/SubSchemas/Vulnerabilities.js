Schemas.Vulnerability = _.extend({
	"min.defaultValue": [
		{name: "Resistance doesn't stack", value: 0.5}
	],
	"max.defaultValue": [
		{name: "Vulnerability doesn't stack", value:  2}
	]
}, Schemas.Attribute);

Schemas.Vulnerabilities = new SimpleSchema({
	acid:		{type: Schemas.Vulnerability},
	bludgeoning:{type: Schemas.Vulnerability},
	cold:		{type: Schemas.Vulnerability},
	fire:		{type: Schemas.Vulnerability},
	force:		{type: Schemas.Vulnerability},
	lightning:	{type: Schemas.Vulnerability},
	necrotic:	{type: Schemas.Vulnerability},
	piercing:	{type: Schemas.Vulnerability},
	poison:		{type: Schemas.Vulnerability},
	psychic:	{type: Schemas.Vulnerability},
	radiant:	{type: Schemas.Vulnerability},
	slashing:	{type: Schemas.Vulnerability},
	thunder:	{type: Schemas.Vulnerability}
});