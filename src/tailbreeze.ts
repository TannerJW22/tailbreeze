// :::
type _TailbreezeConfigInterface = {
	default?: string;
	hover?: string;
	active?: string;
	focus?: string;
	visited?: string;
	disabled?: string;
	sm?: string;
	md?: string;
	lg?: string;
	xl?: string;
	"2xl"?: string;
	custom?: [Function, string]; // <<--| Implementation Pending
};

// :::
interface _TailbreezeModel {
	[key: string]: string | _TailbreezeConfigInterface;
}

// :::
class Tailbreeze {
	build: _TailbreezeModel;

	constructor(model: _TailbreezeModel) {
		this.build = model;
	}

	static model(model: _TailbreezeModel): Tailbreeze {
		return new Tailbreeze(model);
	}

	overwrite(newProp: _TailbreezeModel): _TailbreezeModel {
		// @ts-ignore
		for (const [key, val] of Object.entries(newProp)) {
			this.build[key] = val;
		}

		return this.build;
	}

	clear(propName?: string): _TailbreezeModel {
		if (!propName) {
			this.build = {};
			return this.build;
		}

		return this.build;
	}

	// Returns valid Tailwind CSS className (string)
	toString(): string {
		let className: string = "";
		// @ts-ignore
		for (const [key, val] of Object.entries(this.build)) {
			switch (typeof val) {
				case "string":
					className = className.concat(` ${val} `);
					break;
				//
				case "object":
					// @ts-ignore
					let string: string = this.configObjToString(this.build[key]);
					className = className.concat(` ${string} `);
					break;
				//
				default:
					console.log(`Tailbreeze Error: "${key}" has an invalid value type.`); // <<--*
			}
		}
		className = className.trim().replace(/\s+/g, " ");
		return className;
	}

	// Returns valid Tailwind CSS className (string)
	toAltString(): string {
		let className: string = "";
		// @ts-ignore
		for (const [key, val] of Object.entries(this.build)) {
			switch (typeof val) {
				case "string":
					className = className.concat(` ${val} `);
					break;
				//
				case "object":
					let string: string = "";
					// @ts-ignore
					for (const [key2, val2] of Object.entries(this.build[key])) {
						string = string.concat(` ${val2}`);
					}
					className = className.concat(` ${string} `);
					break;
				//
				default:
					console.log(`Tailbreeze Error: "${key}" has an invalid value type.`); // <<--*
			}
		}
		className = className.trim().replace(/\s+/g, " ");
		return className;
	}

	// Stringify Method for Object Conversions
	configObjToString(configObj: object): string {
		let string: string = "";
		// @ts-ignore
		for (const [key, val] of Object.entries(configObj)) {
			let x = val.split(" ");
			for (let i = 0; i < x.length; ++i) {
				x[i] = `${key}:${x[i]}`;
				string = string.concat(` ${x[i]}`);
			}
		}
		string = string.replace(/default:/g, "");
		return string;
	}
}

module.exports = Tailbreeze;

const loginButton = Tailbreeze.model({
	layout: "py-2 px-3 w-full",
	background: {
		default: "bg-black",
		hover: "bg-red-900",
	},
	typography: "text-white",
	border: "border border-white rounded-lg",
});

console.log(loginButton.toString()); // <<--*
