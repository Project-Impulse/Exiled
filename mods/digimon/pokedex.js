//Fresh, 100% Ready/

'use strict';

exports.BattlePokedex = {
	botamon: {
		num: 771,
		species: "Botamon",
		types: ["Fire"],
		baseStats: {
			hp: 35,
			atk: 100,
			def: 50,
			spa: 100,
			spd: 50,
			spe: 50
		},
		abilities: {
			0: "Data"
		},
		weightkg: 2.3,
		color: "Black",
		evos: ["Koromon", "Sukamon"],
	},
	poyomon: {
		num: 582,
		species: "Poyomon",
		types: ["Air"],
		baseStats: {
			hp: 35,
			atk: 100,
			def: 100,
			spa: 100,
			spd: 100,
			spe: 50
		},
		abilities: {
			0: "Data"
		},
		weightkg: 2.3,
		color: "White",
		evos: ["Tokomon", "Sukamon"],
	},
	punimon: {
		num: 554,
		species: "Punimon",
		types: ["Air"],
		baseStats: {
			hp: 35,
			atk: 50,
			def: 100,
			spa: 50,
			spd: 100,
			spe: 100
		},
		abilities: {
			0: "Data"
		},
		weightkg: 2.3,
		color: "Red",
		evos: ["Tsunomon", "Sukamon"],
	},
	yuramon: {
		num: 268,
		species: "Yuramon",
		types: ["Earth"],
		baseStats: {
			hp: 55,
			atk: 50,
			def: 50,
			spa: 50,
			spd: 50,
			spe: 50
		},
		abilities: {
			0: "Data"
		},
		weightkg: 2.3,
		color: "White",
		evos: ["Tanemon", "Sukamon"],
	},
	//In-Training, 100% Ready/
	koromon: {
		num: 174,
		species: "Koromon",
		types: ["Fire", "Battle"],
		baseStats: {
			hp: 50,
			atk: 100,
			def: 50,
			spa: 100,
			spd: 50,
			spe: 50
		},
		abilities: {
			0: "Data"
		},
		weightkg: 4.5,
		color: "Pink",
		evos: ["Agumon", "Gabumon", "Kunemon", "Sukamon"],
		prevo: ["Botamon"],
	},
	tokomon: {
		num: 266,
		species: "Tokomon",
		types: ["Air", "Battle"],
		baseStats: {
			hp: 50,
			atk: 100,
			def: 100,
			spa: 100,
			spd: 100,
			spe: 50
		},
		abilities: {
			0: "Data"
		},
		weightkg: 4.5,
		color: "White",
		evos: ["Patamon", "Biyomon", "Kunemon", "Sukamon"],
		prevos: ["Poyomon"],
	},
	tsunomon: {
		num: 220,
		species: "Tsunomon",
		types: ["Air", "Ice"],
		baseStats: {
			hp: 50,
			atk: 50,
			def: 100,
			spa: 50,
			spd: 100,
			spe: 100
		},
		abilities: {
			0: "Data"
		},
		weightkg: 4.5,
		color: "Brown",
		evos: ["Elecmon", "Penguinmon", "Kunemon", "Sukamon"],
		prevos: ["Punimon"],
	},
	tanemon: {
		num: 191,
		species: "Tanemon",
		types: ["Earth", "Ice"],
		baseStats: {
			hp: 70,
			atk: 50,
			def: 50,
			spa: 50,
			spd: 50,
			spe: 50
		},
		abilities: {
			0: "Data"
		},
		weightkg: 4.5,
		color: "Green",
		evos: ["Palmon", "Betamon", "Kunemon", "Sukamon"],
		prevos: ["Yuramon"],
	},
	//Rookie, 100% ready
	agumon: {
		num: 694,
		species: "Agumon",
		types: ["Fire", "Battle"],
		baseStats: {
			hp: 100,
			atk: 200,
			def: 100,
			spa: 200,
			spd: 100,
			spe: 150
		},
		abilities: {
			0: "Vaccine"
		},
		weightkg: 6.8,
		color: "Yellow",
		evo: ["Birdramon", "Centarumon", "Greymon", "Meramon", "Monochromon", "Tyrannomon", "Nanimon", "Numemon", "Sukamon"],
		prevo: ["Koromon"],
	},
	gabumon: {
		num: 774,
		species: "Gabumon",
		types: ["Battle", "Fire"],
		baseStats: {
			hp: 100,
			atk: 100,
			def: 200,
			spa: 100,
			spd: 200,
			spe: 200
		},
		abilities: {
			0: "Data"
		},
		weightkg: 6.8,
		color: "White",
		evo: ["Centarumon", "Drimogemon", "Garurumon", "Monochromon", "Ogremon", "Tyrannomon", "Nanimon", "Numemon", "Sukamon"],
		prevo: ["Koromon"],
	},
	patamon: {
		num: 702,
		species: "Patamon",
		types: ["Battle", "Air"],
		baseStats: {
			hp: 120,
			atk: 200,
			def: 200,
			spa: 200,
			spd: 200,
			spe: 100
		},
		abilities: {
			0: "Data"
		},
		weightkg: 6.8,
		color: "Brown",
		evo: ["Angemon", "Leomon", "Ogremon", "Unimon", "Ogremon", "Nanimon", "Numemon", "Sukamon"],
		prevo: ["Tokomon"],
	},
	elecmon: {
		num: 309,
		species: "Elecmon",
		types: ["Air", "Battle"],
		baseStats: {
			hp: 100,
			atk: 200,
			def: 100,
			spa: 200,
			spd: 100,
			spe: 200
		},
		abilities: {
			0: "Data"
		},
		weightkg: 6.8,
		color: "Red",
		evo: ["Angemon", "Leomon", "Kokatorimon", "Nanimon", "Numemon", "Sukamon"],
		prevo: ["Tsunomon"],
	},
	biyomon: {
		num: 661,
		species: "Biyomon",
		types: ["Air", "Fire"],
		baseStats: {
			hp: 120,
			atk: 150,
			def: 100,
			spa: 100,
			spd: 100,
			spe: 200
		},
		abilities: {
			0: "Vaccine"
		},
		weightkg: 6.8,
		color: "Pink",
		evo: ["Airdramon", "Birdramon", "Kabuterimon", "Kokatorimon", "Unimon", "Nanimon", "Numemon", "Sukamon"],
		prevo: ["Tokomon"],
	},
	kunemon: {
		num: 013,
		species: "Kunemon",
		types: ["Earth", "Air"],
		baseStats: {
			hp: 100,
			atk: 200,
			def: 100,
			spa: 200,
			spd: 100,
			spe: 130
		},
		abilities: {
			0: "Virus"
		},
		weightkg: 6.8,
		color: "Yellow",
		evo: ["Kabuterimon", "Kuwagamon", "Vegiemon"],
		prevo: ["Koromon", "Tokomon", "Tsunomon", "Tanemon", "Sukamon"],
	},
	palmon: {
		num: 192,
		species: "Palmon",
		types: ["Earth", "Ice"],
		baseStats: {
			hp: 120,
			atk: 100,
			def: 100,
			spa: 100,
			spd: 100,
			spe: 120
		},
		abilities: {
			0: "Vaccine"
		},
		weightkg: 6.8,
		color: "Green",
		evo: ["Coelamon", "Kuwagamon", "Ninjamon", "Vegiemon", "Whamon", "Nanimon", "Numemon", "Sukamon"],
		prevo: ["Tanemon"],
	},
	betamon: {
		num: 258,
		species: "Betamon",
		types: ["Ice", "Air"],
		baseStats: {
			hp: 100,
			atk: 100,
			def: 200,
			spa: 100,
			spd: 200,
			spe: 130
		},
		abilities: {
			0: "Virus"
		},
		weightkg: 6.8,
		color: "Green",
		evo: ["Coelamon", "Drimogemon", "Seadramon", "Shellmon", "Whamon", "Nanimon", "Numemon", "Sukamon"],
		prevo: ["Tanemon"],
	},
	penguinmon: {
		num: 225,
		species: "Penguinmon",
		types: ["Ice", "Earth"],
		baseStats: {
			hp: 120,
			atk: 100,
			def: 200,
			spa: 100,
			spd: 200,
			spe: 100
		},
		abilities: {
			0: "Data"
		},
		weightkg: 6.8,
		color: "Blue",
		evo: ["Fridgimon", "Garurumon", "Mojaymon", "Shellmon", "Whamon", "Nanimon", "Numemon", "Sukamon"],
		prevo: ["Tsunomon"],
	},
	//Champion/
	greymon: {
		num: 695,
		species: "Greymon",
		types: ["Fire", "Battle", "Air"],
		baseStats: {
			hp: 170,
			atk: 300,
			def: 100,
			spa: 300,
			spd: 100,
			spe: 250
		},
		abilities: {
			0: "Vaccine"
		},
		weightkg: 13.6,
		color: "Brown",
		evo: ["MetalGreymon", "SkullGreymon", "Vademon"],
		prevo: ["Agumon"],
	},
	monochromon: {
		num: 111,
		species: "Monochromon",
		types: ["Fire", "Battle", "Earth"],
		baseStats: {
			hp: 220,
			atk: 300,
			def: 100,
			spa: 300,
			spd: 100,
			spe: 300
		},
		abilities: {
			0: "Data"
		},
		weightkg: 18.1,
		color: "Gray",
		evo: ["MetalGreymon", "MetalMamemon", "Vademon"],
		prevo: ["Agumon", "Gabumon"],
	},
	ogremon: {
		num: 105,
		species: "Ogremon",
		types: ["Battle", "Fire", "Earth"],
		baseStats: {
			hp: 200,
			atk: 300,
			def: 300,
			spa: 300,
			spd: 300,
			spe: 100
		},
		abilities: {
			0: "Virus"
		},
		weightkg: 13.6,
		color: "Green",
		evo: ["Andromon", "Giromon", "Vademon"],
		prevo: ["Gabumon", "Patamon"],
	},
	airdramon: {
		num: 334,
		species: "Airdramon",
		types: ["Air", "Fire"],
		baseStats: {
			hp: 170,
			atk: 200,
			def: 100,
			spa: 200,
			spd: 100,
			spe: 400
		},
		abilities: {
			0: "Vaccine"
		},
		weightkg: 13.6,
		color: "Blue",
		evo: ["Megadramon", "Phoenixmon", "Vademon"],
		prevo: ["Biyomon"],
	},
	kuwagamon: {
		num: 794,
		species: "Kuwagamon",
		types: ["Earth", "Battle", "Air"],
		baseStats: {
			hp: 220,
			atk: 300,
			def: 100,
			spa: 300,
			spd: 100,
			spe: 100
		},
		abilities: {
			0: "Virus"
		},
		weightkg: 13.6,
		color: "Red",
		evo: ["HerculesKabuterimon", "Piximon", "Vademon"],
		prevo: ["Kunemon", "Palmon"],
	},
	whamon: {
		num: 321,
		species: "Whamon",
		types: ["Ice", "Earth"],
		baseStats: {
			hp: 220,
			atk: 100,
			def: 100,
			spa: 100,
			spd: 100,
			spe: 300
		},
		abilities: {
			0: "Vaccine"
		},
		weightkg: 18.1,
		color: "Blue",
		evo: ["Mamemon", "MegaSeadramon", "Vademon"],
		prevo: ["Betamon", "Palmon", "Penguinmon"],
	},
	frigimon: {
		num: 614,
		species: "Frigimon",
		types: ["Ice", "Battle"],
		baseStats: {
			hp: 220,
			atk: 100,
			def: 300,
			spa: 100,
			spd: 300,
			spe: 100
		},
		abilities: {
			0: "Vaccine"
		},
		weightkg: 18.1,
		color: "Blue",
		evo: ["Mamemon", "MetalMamemon", "Vademon"],
		prevo: ["Penguinmon"],
	},
	nanimon: {
		num: 101,
		species: "Nanimon",
		types: ["Filth", "Battle"],
		baseStats: {
			hp: 150,
			atk: 100,
			def: 100,
			spa: 100,
			spd: 100,
			spe: 100
		},
		abilities: {
			0: "Virus"
		},
		weightkg: 2.3,
		color: "Brown",
		evo: ["Digitamamon", "Vademon"],
		prevo: ["Agumon", "Betamon", "Biyomon", "Elecmon", "Gabumon", "Kunemon", "Palmon", "Patamon", "Penguinmon"],
	},
	meramon: {
		num: 126,
		species: "Meramon",
		types: ["Fire", "Battle"],
		baseStats: {
			hp: 150,
			atk: 300,
			def: 100,
			spa: 300,
			spd: 100,
			spe: 160
		},
		abilities: {
			0: "Data"
		},
		weightkg: 9.1,
		color: "Red",
		evo: ["Andromon", "MetalGreymon", "Vademon"],
		prevo: ["Agumon"],
	},
	drimogemon: {
		num: 530,
		species: "Drimogemon",
		types: ["Battle", "Earth"],
		baseStats: {
			hp: 150,
			atk: 100,
			def: 300,
			spa: 100,
			spd: 300,
			spe: 300
		},
		abilities: {
			0: "Data"
		},
		weightkg: 18.1,
		color: "Purple",
		evo: ["MetalGreymon", "Vademon"],
		prevo: ["Betamon", "Gabumon"],
	},
	leomon: {
		num: 668,
		species: "Leomon",
		types: ["Battle", "Air"],
		baseStats: {
			hp: 170,
			atk: 300,
			def: 100,
			spa: 300,
			spd: 100,
			spe: 300
		},
		abilities: {
			0: "Vaccine"
		},
		weightkg: 9.1,
		color: "Yellow",
		evo: ["Andromon", "Mamemon", "Vademon"],
		prevo: ["Elecmon", "Patamon"],
	},
	kokatorimon: {
		num: 256,
		species: "Kokatorimon",
		types: ["Air", "Battle"],
		baseStats: {
			hp: 170,
			atk: 300,
			def: 100,
			spa: 300,
			spd: 100,
			spe: 300
		},
		abilities: {
			0: "Vaccine"
		},
		weightkg: 13.6,
		color: "White",
		evo: ["Andromon", "Mamemon", "Vademon"],
		prevo: ["Elecmon", "Patamon"],
	},
	vegiemon: {
		num: 455,
		species: "Vegiemon",
		types: ["Earth", "Ice"],
		baseStats: {
			hp: 150,
			atk: 300,
			def: 100,
			spa: 300,
			spd: 100,
			spe: 130
		},
		abilities: {
			0: "Virus"
		},
		weightkg: 4.5,
		color: "Green",
		evo: ["Piximon", "Vademon"],
		prevo: ["Kunemon", "Palmon"],
	},
	shellmon: {
		num: 558,
		species: "Shellmon",
		types: ["Ice", "Earth"],
		baseStats: {
			hp: 220,
			atk: 100,
			def: 300,
			spa: 100,
			spd: 300,
			spe: 100
		},
		abilities: {
			0: "Data"
		},
		weightkg: 18.1,
		color: "Pink",
		evo: ["MegaSeadramon", "HerculesKabuterimon", "Vademon"],
		prevo: ["Betamon", "Pengiunmon"],
	},
	mojyamon: {
		num: 288,
		species: "Mojyamon",
		types: ["Ice", "Battle", "Earth"],
		baseStats: {
			hp: 200,
			atk: 100,
			def: 300,
			spa: 100,
			spd: 300,
			spe: 100
		},
		abilities: {
			0: "Vaccine"
		},
		weightkg: 9.1,
		color: "White",
		evo: ["Mamemon", "SkullGreymon", "Vademon"],
		prevo: ["Penguinmon"],
	},
	birdramon: {
		num: 146,
		species: "Birdramon",
		types: ["Fire", "Air"],
		baseStats: {
			hp: 150,
			atk: 300,
			def: 100,
			spa: 300,
			spd: 100,
			spe: 305
		},
		abilities: {
			0: "Vaccine"
		},
		weightkg: 9.1,
		color: "Red",
		evo: ["Phoenixmon", "Vademon"],
		prevo: ["Agumon", "Biyomon"],
	},
	/*
	Template for speed creating Digimon
	:{
		num: ,
		species: "",
		types: [""],
		baseStats: {
			hp: ,
			atk: ,
			def: ,
			spa: ,
			spd: ,
			spe:
		},
		abilities: {
			0: ""
		},
		color: "",
		weightkg: ,
		prevos: [""],
		evos: [""],
	},
					*/
	tyrannomon: {
		num: 697,
		species: "Tyrannomon",
		types: ["Fire", "Battle"],
		baseStats: {
			hp: 200,
			atk: 300,
			def: 300,
			spa: 300,
			spd: 300,
			spe: 150
		},
		abilities: {
			0: "Data"
		},
		color: "Red",
		weightkg: 13.6,
		prevo: ["Agumon", "Gabumon", "Patamon"],
		evo: ["MetalGreymon", "Megadramon", "Vademon"],
	},
	angemon: {
		num: 176,
		species: "Angemon",
		types: ["Air", "Battle"],
		baseStats: {
			hp: 170,
			atk: 300,
			def: 100,
			spa: 300,
			spd: 100,
			spe: 300
		},
		abilities: {
			0: "Vaccine"
		},
		weightkg: 9.1,
		color: "White",
		prevo: ["Elecmon", "Patamon"],
		evo: ["Andromon", "Devimon", "Phoenixmon", "Vademon"],
	},
	unimon: {
		num: 078,
		species: "Unimon",
		types: ["Air", "Battle"],
		baseStats: {
			hp: 200,
			atk: 100,
			def: 300,
			spa: 100,
			spd: 300,
			spe: 300
		},
		abilities: {
			0: "Vaccine"
		},
		weightkg: 13.6,
		color: "White",
		prevo: ["Biyomon", "Patamon"],
		evo: ["Giromon", "Phoenixmon", "Vademon"],
	},
	ninjamon: {
		num: 617,
		species: "Ninjamon",
		types: ["Earth", "Battle", "Fire"],
		baseStats: {
			hp: 150,
			atk: 150,
			def: 150,
			spa: 150,
			spd: 150,
			spe: 150
		},
		abilities: {
			0: "Data"
		},
		weightkg: 4.5,
		color: "Red",
		prevo: ["Palmon"],
		evo: ["Mamemon", "Metalmamemon", "Piximon", "Vademon"],
	},
	coelamon: {
		num: 369,
		species: "Coelamon",
		types: ["Ice", "Earth"],
		baseStats: {
			hp: 150,
			atk: 100,
			def: 300,
			spa: 100,
			spd: 300,
			spe: 100
		},
		abilities: {
			0: "Data"
		},
		weightkg: 13.6,
		color: "White",
		prevo: ["Betamon", "Palmon"],
		evo: ["MegaSeadramon", "Vademon"],
	},
	numemon: {
		num: 089,
		species: "Numemon",
		types: ["Filth"],
		baseStats: {
			hp: 150,
			atk: 100,
			def: 100,
			spa: 100,
			spd: 100,
			spe: 100
		},
		abilities: {
			0: "Data"
		},
		weightkg: 2.3,
		color: "Green",
		prevo: ["Agumon", "Betamon", "Biyomon", "Elecmon", "Gabumon", "Kunemon", "Palmon", "Patamon", "Penguinmon"],
		evo: ["Monzemon", "Vademon"],
	},
	centarumon: {
		num: 750,
		species: "Centarumon",
		types: ["Fire", "Battle"],
		baseStats: {
			hp: 170,
			atk: 300,
			def: 100,
			spa: 300,
			spd: 100,
			spe: 300
		},
		abilities: {
			0: "Data"
		},
		weightkg: 13.6,
		color: "Brown",
		prevo: ["Agumon", "Gabumon"],
		evo: ["Andromon", "Giromon", "Vademon"],
	},
	devimon: {
		num: 354,
		species: "Devimon",
		types: ["Battle", "Air", "Ice"],
		baseStats: {
			hp: 170,
			atk: 300,
			def: 100,
			spa: 300,
			spd: 100,
			spe: 300
		},
		abilities: {
			0: "Virus"
		},
		weightkg: 9.1,
		color: "Black",
		prevo: ["Angemon"],
		evo: ["Megadramon", "SkullGreymon", "Vademon"],
	},
	bakemon: {
		num: 778,
		species: "Bakemon",
		types: ["Air", "Ice"],
		baseStats: {
			hp: 150,
			atk: 170,
			def: 170,
			spa: 170,
			spd: 170,
			spe: 170
		},
		abilities: {
			0: "Virus"
		},
		weightkg: 9.1,
		color: "White",
		prevo: ["Agumon", "Betamon", "Biyomon", "Elecmon", "Gabumon", "Kunemon", "Palmon", "Patamon", "Penguinmon"],
		evo: ["SkullGreymon", "Giromon", "Vademon"],
	},
	kabuterimon: {
		num: 214,
		species: "Kabuterimon",
		types: ["Earth", "Fire", "Air"],
		baseStats: {
			hp: 200,
			atk: 300,
			def: 100,
			spa: 300,
			spd: 100,
			spe: 300
		},
		abilities: {
			0: "Vaccine"
		},
		weightkg: 13.6,
		color: "Blue",
		prevo: ["Biyomon", "Kunemon"],
		evo: ["HerculesKabuterimon", "MetalMamemon", "Vademon"],
	},
	seadramon: {
		num: 148,
		species: "Seadramon",
		types: ["Ice", "Earth", "Fire"],
		baseStats: {
			hp: 200,
			atk: 100,
			def: 300,
			spa: 100,
			spd: 300,
			spe: 100
		},
		abilities: {
			0: "Data"
		},
		weightkg: 13.6,
		color: "Blue",
		prevo: ["Betamon"],
		evo: ["MegaSeadramon", "Megadramon", "Vademon"],
	},
	garurumon: {
		num: 745,
		species: "Garurumon",
		types: ["Ice", "Fire", "Battle"],
		baseStats: {
			hp: 150,
			atk: 100,
			def: 300,
			spa: 100,
			spd: 300,
			spe: 300
		},
		abilities: {
			0: "Vaccine"
		},
		weightkg: 13.6,
		color: "White",
		prevo: ["Gabumon", "Penguinmon"],
		evo: ["MegaSeadramon", "SkullGreymon", "Vademon"],
	},
	sukamon: {
		num: 569,
		species: "Sukamon",
		types: ["Filth"],
		baseStats: {
			hp: 150,
			atk: 100,
			def: 100,
			spa: 100,
			spd: 100,
			spe: 100
		},
		abilities: {
			0: "Virus"
		},
		weightkg: 2.3,
		color: "Yellow",
		prevo: ["Agumon", "Betamon", "Biyomon", "Elecmon", "Gabumon", "Kunemon", "Palmon", "Patamon", "Penguinmon"],
		evo: ["Etemon", "Vademon"],
	},
	//Ultimate Digimon
	metalgreymon:{
		num: 621,
		species: "MetalGreymon",
		types: ["Mech", "Fire", "Battle"],
		baseStats: {
			hp: 400,
			atk: 500,
			def: 500,
			spa: 500,
			spd: 500,
			spe: 300
		},
		abilities: {
			0: "Virus"
		},
		color: "Purple",
		weightkg: 22.7,
		prevos: ["Greymon", "Monochromon"],
	},
	skullgreymon:{
		num: 306,
		species: "SkullGreymon",
		types: ["Battle", "Ice", "Mech"],
		baseStats: {
			hp: 400,
			atk: 400,
			def: 400,
			spa: 400,
			spd: 400,
			spe: 200
		},
		abilities: {
			0: "Virus"
		},
		color: "White",
		weightkg: 13.6,
		prevos: ["Bakemon", "Devimon", "Garurumon", "Greymon", "Mojyamon"],
	},
	giromon:{
		num: 624,
		species: "Giromon",
		types: ["Mech", "Air", "Battle"],
		baseStats: {
			hp: 200,
			atk: 400,
			def: 100,
			spa: 400,
			spd: 100,
			spe: 300
		},
		abilities: {
			0: "Vaccine"
		},
		color: "Purple",
		weightkg: 2.3,
		prevos: ["Bakemon", "Centarumon", "Ogremon", "Unimon"],
	},
	herculeskabuterimon:{
		num: 127,
		species: "HerculesKabuterimon",
		types: ["Earth", "Battle", "Fire"],
		baseStats: {
			hp: 300,
			atk: 500,
			def: 400,
			spa: 500,
			spd: 400,
			spe: 400
		},
		abilities: {
			0: "Data"
		},
		color: "Yellow",
		weightkg: 18.1,
		prevos: ["Kabuterimon", "Kuwagamon", "Shellmon"],
	},
	mamemon:{
		num: 433,
		species: "Mamemon",
		types: ["Battle", "Mech"],
		baseStats: {
			hp: 100,
			atk: 400,
			def: 300,
			spa: 400,
			spd: 300,
			spe: 300
		},
		abilities: {
			0: "Data"
		},
		color: "Gray",
		weightkg: 2.3,
		prevos: ["Frigimon", "Leomon", "Mojyamon", "Ninjamon", "Whamon"],
	},
	megaseadramon:{
		num: 130,
		species: "MegaSeadramon",
		types: ["Ice", "Air"],
		baseStats: {
			hp: 300,
			atk: 500,
			def: 500,
			spa: 500,
			spd: 500,
			spe: 200
		},
		abilities: {
			0: "Data"
		},
		color: "Red",
		weightkg: 13.6,
		prevos: ["Coelamon", "Garurumon", "Seadramon", "Shellmon", "Whamon"],
	},
	vademon:{
		num: 606,
		species: "Vademon",
		types: ["Mech", "Earth"],
		baseStats: {
			hp: 199,
			atk: 199,
			def: 199,
			spa: 199,
			spd: 199,
			spe: 199
		},
		abilities: {
			0: "Virus"
		},
		color: "Pink",
		weightkg: 2.3,
		prevos: ["Airdramon", "Angemon", "Bakemon", "Birdramon", "Centarumon", "Coelamon", "Devimon", "Drimogemon", "Frigimon", "Garurumon", "Greymon", "Kabuterimon", "Kokatorimon", "Kuwagamon", "Leomon", "Meramon", "Mojyamon", "Monochromon", "Nanimon", "Numemon", "Ogremon", "Seadramon", "Shellmon", "Sukamon", "Tyrannomon", "Unimon", "Vegiemon", "Whamon"],
	},
	etemon:{
		num: 514,
		species: "Etemon",
		types: ["Battle", "Air", "Filth"],
		baseStats: {
			hp: 200,
			atk: 400,
			def: 200,
			spa: 400,
			spd: 200,
			spe: 400
		},
		abilities: {
			0: "Virus"
		},
		color: "Brown",
		weightkg: 6.8,
		prevos: ["Sukamon"],
	},
	andromon:{
		num: 379,
		species: "Andromon",
		types: ["Mech", "Battle", "Air"],
		baseStats: {
			hp: 200,
			atk: 200,
			def: 400,
			spa: 200,
			spd: 400,
			spe: 200
		},
		abilities: {
			0: "Vaccine"
		},
		color: "Gray",
		weightkg: 18.1,
		prevos: ["Angemon", "Centarumon", "Meramon", "Ogremon"],
	},
	megadramon:{
		num: 718,
		species: "Megadramon",
		types: ["Mech", "Ice", "Battle"],
		baseStats: {
			hp: 300,
			atk: 500,
			def: 300,
			spa: 500,
			spd: 300,
			spe: 400
		},
		abilities: {
			0: "Virus"
		},
		color: "Red",
		weightkg: 24.9,
		prevos: ["Airdramon", "Devimon", "Seadramon", "Tyrannomon"],
	},
	phoenixmon:{
		num: 250,
		species: "Phoenixmon",
		types: ["Air", "Fire"],
		baseStats: {
			hp: 500,
			atk: 200,
			def: 200,
			spa: 200,
			spd: 200,
			spe: 500
		},
		abilities: {
			0: "Vaccine"
		},
		color: "Yellow",
		weightkg: 13.6,
		prevos: ["Aidramon", "Angemon", "Birdramon", "Kokatorimon", "Unimon"],
	},
	piximon:{
		num: 039,
		species: "Piximon",
		types: ["Earth", "Air"],
		baseStats: {
			hp: 100,
			atk: 300,
			def: 300,
			spa: 300,
			spd: 300,
			spe: 400
		},
		abilities: {
			0: "Data"
		},
		color: "Pink",
		weightkg: 2.3,
		prevos: ["Kokatorimon", "Kuwagamon", "Ninjamon", "Vegiemon"],
	},
	metalmamemon:{
		num: 597,
		species: "MetalMamemon",
		types: ["Battle", "Mech"],
		baseStats: {
			hp: 100,
			atk: 500,
			def: 400,
			spa: 500,
			spd: 400,
			spe: 400
		},
		abilities: {
			0: "Data"
		},
		color: "Gray",
		weightkg: 4.6,
		prevos: ["Frigimon", "Kabuterimon", "Monochromon", "Ninjamon"],
	},
	monzaemon:{
		num: 760,
		species: "Monzaemon",
		types: ["Battle", "Air"],
		baseStats: {
			hp: 300,
			atk: 300,
			def: 300,
			spa: 300,
			spd: 300,
			spe: 300
		},
		abilities: {
			0: "Vaccine"
		},
		color: "Yellow",
		weightkg: 18.1,
		prevos: ["Numemon"],
	},
	digitamamon:{
		num: 175,
		species: "DigiTamamon",
		types: ["Fire", "Air", "Ice"],
		baseStats: {
			hp: 300,
			atk: 400,
			def: 400,
			spa: 400,
			spd: 400,
			spe: 400
		},
		abilities: {
			0: "Data"
		},
		color: "White",
		weightkg: 4.5,
		prevos: ["Nanimon"],
	},
	//Mega Digimon
	machinedramon:{
		num: 649,
		species: "Machinedramon",
		types: ["Mech", "Air", "Battle"],
		baseStats: {
			hp: 940,
			atk: 500,
			def: 500,
			spa: 500,
			spd: 500,
			spe: 100
		},
		abilities: {
			0: "Virus"
		},
		color: "Gray",
		weightkg: 36.3,
	},
};
