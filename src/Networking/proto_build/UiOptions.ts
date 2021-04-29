/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "proto";

export interface Slider {
  text: string;
  min: number;
  max: number;
  interval: number;
  default: number;
}

export interface Checkbox {
  text: string;
  default: boolean;
}

export interface Dropdown {
  text: string;
  default: Long;
  options: string[];
}

export interface RadioButton {
  default: Long;
  options: string[];
}

export interface TextField {
  text: string;
}

export interface UiOptionDeclaration {
  name: string;
  /** If set to true, the module itself can edit the button, and not just the user. */
  isMutable: boolean;
  /** description of what this button does */
  description: string;
  slider: Slider | undefined;
  checkbox: Checkbox | undefined;
  dropdown: Dropdown | undefined;
  radiobutton: RadioButton | undefined;
  textfield: TextField | undefined;
}

export interface UiOptionDeclarations {
  options: UiOptionDeclaration[];
}

export interface UiValue {
  floatValue: number | undefined;
  boolValue: boolean | undefined;
  integerValue: Long | undefined;
  textValue: string | undefined;
}

export interface UiValues {
  /** maps UiOption::name to the value it currently contains. */
  uiValues: { [key: string]: UiValue };
}

export interface UiValues_UiValuesEntry {
  key: string;
  value: UiValue | undefined;
}

const baseSlider: object = {
  text: "",
  min: 0,
  max: 0,
  interval: 0,
  default: 0,
};

export const Slider = {
  encode(
    message: Slider,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.min !== 0) {
      writer.uint32(21).float(message.min);
    }
    if (message.max !== 0) {
      writer.uint32(29).float(message.max);
    }
    if (message.interval !== 0) {
      writer.uint32(37).float(message.interval);
    }
    if (message.default !== 0) {
      writer.uint32(45).float(message.default);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSlider } as Slider;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.text = reader.string();
          break;
        case 2:
          message.min = reader.float();
          break;
        case 3:
          message.max = reader.float();
          break;
        case 4:
          message.interval = reader.float();
          break;
        case 5:
          message.default = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Slider {
    const message = { ...baseSlider } as Slider;
    if (object.text !== undefined && object.text !== null) {
      message.text = String(object.text);
    } else {
      message.text = "";
    }
    if (object.min !== undefined && object.min !== null) {
      message.min = Number(object.min);
    } else {
      message.min = 0;
    }
    if (object.max !== undefined && object.max !== null) {
      message.max = Number(object.max);
    } else {
      message.max = 0;
    }
    if (object.interval !== undefined && object.interval !== null) {
      message.interval = Number(object.interval);
    } else {
      message.interval = 0;
    }
    if (object.default !== undefined && object.default !== null) {
      message.default = Number(object.default);
    } else {
      message.default = 0;
    }
    return message;
  },

  toJSON(message: Slider): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    message.min !== undefined && (obj.min = message.min);
    message.max !== undefined && (obj.max = message.max);
    message.interval !== undefined && (obj.interval = message.interval);
    message.default !== undefined && (obj.default = message.default);
    return obj;
  },

  fromPartial(object: DeepPartial<Slider>): Slider {
    const message = { ...baseSlider } as Slider;
    if (object.text !== undefined && object.text !== null) {
      message.text = object.text;
    } else {
      message.text = "";
    }
    if (object.min !== undefined && object.min !== null) {
      message.min = object.min;
    } else {
      message.min = 0;
    }
    if (object.max !== undefined && object.max !== null) {
      message.max = object.max;
    } else {
      message.max = 0;
    }
    if (object.interval !== undefined && object.interval !== null) {
      message.interval = object.interval;
    } else {
      message.interval = 0;
    }
    if (object.default !== undefined && object.default !== null) {
      message.default = object.default;
    } else {
      message.default = 0;
    }
    return message;
  },
};

const baseCheckbox: object = { text: "", default: false };

export const Checkbox = {
  encode(
    message: Checkbox,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.default === true) {
      writer.uint32(16).bool(message.default);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Checkbox {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCheckbox } as Checkbox;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.text = reader.string();
          break;
        case 2:
          message.default = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Checkbox {
    const message = { ...baseCheckbox } as Checkbox;
    if (object.text !== undefined && object.text !== null) {
      message.text = String(object.text);
    } else {
      message.text = "";
    }
    if (object.default !== undefined && object.default !== null) {
      message.default = Boolean(object.default);
    } else {
      message.default = false;
    }
    return message;
  },

  toJSON(message: Checkbox): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    message.default !== undefined && (obj.default = message.default);
    return obj;
  },

  fromPartial(object: DeepPartial<Checkbox>): Checkbox {
    const message = { ...baseCheckbox } as Checkbox;
    if (object.text !== undefined && object.text !== null) {
      message.text = object.text;
    } else {
      message.text = "";
    }
    if (object.default !== undefined && object.default !== null) {
      message.default = object.default;
    } else {
      message.default = false;
    }
    return message;
  },
};

const baseDropdown: object = { text: "", default: Long.ZERO, options: "" };

export const Dropdown = {
  encode(
    message: Dropdown,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (!message.default.isZero()) {
      writer.uint32(16).int64(message.default);
    }
    for (const v of message.options) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dropdown {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDropdown } as Dropdown;
    message.options = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.text = reader.string();
          break;
        case 2:
          message.default = reader.int64() as Long;
          break;
        case 3:
          message.options.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Dropdown {
    const message = { ...baseDropdown } as Dropdown;
    message.options = [];
    if (object.text !== undefined && object.text !== null) {
      message.text = String(object.text);
    } else {
      message.text = "";
    }
    if (object.default !== undefined && object.default !== null) {
      message.default = Long.fromString(object.default);
    } else {
      message.default = Long.ZERO;
    }
    if (object.options !== undefined && object.options !== null) {
      for (const e of object.options) {
        message.options.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Dropdown): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    message.default !== undefined &&
      (obj.default = (message.default || Long.ZERO).toString());
    if (message.options) {
      obj.options = message.options.map((e) => e);
    } else {
      obj.options = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Dropdown>): Dropdown {
    const message = { ...baseDropdown } as Dropdown;
    message.options = [];
    if (object.text !== undefined && object.text !== null) {
      message.text = object.text;
    } else {
      message.text = "";
    }
    if (object.default !== undefined && object.default !== null) {
      message.default = object.default as Long;
    } else {
      message.default = Long.ZERO;
    }
    if (object.options !== undefined && object.options !== null) {
      for (const e of object.options) {
        message.options.push(e);
      }
    }
    return message;
  },
};

const baseRadioButton: object = { default: Long.ZERO, options: "" };

export const RadioButton = {
  encode(
    message: RadioButton,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.default.isZero()) {
      writer.uint32(8).int64(message.default);
    }
    for (const v of message.options) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RadioButton {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRadioButton } as RadioButton;
    message.options = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.default = reader.int64() as Long;
          break;
        case 2:
          message.options.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RadioButton {
    const message = { ...baseRadioButton } as RadioButton;
    message.options = [];
    if (object.default !== undefined && object.default !== null) {
      message.default = Long.fromString(object.default);
    } else {
      message.default = Long.ZERO;
    }
    if (object.options !== undefined && object.options !== null) {
      for (const e of object.options) {
        message.options.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: RadioButton): unknown {
    const obj: any = {};
    message.default !== undefined &&
      (obj.default = (message.default || Long.ZERO).toString());
    if (message.options) {
      obj.options = message.options.map((e) => e);
    } else {
      obj.options = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RadioButton>): RadioButton {
    const message = { ...baseRadioButton } as RadioButton;
    message.options = [];
    if (object.default !== undefined && object.default !== null) {
      message.default = object.default as Long;
    } else {
      message.default = Long.ZERO;
    }
    if (object.options !== undefined && object.options !== null) {
      for (const e of object.options) {
        message.options.push(e);
      }
    }
    return message;
  },
};

const baseTextField: object = { text: "" };

export const TextField = {
  encode(
    message: TextField,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextField {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTextField } as TextField;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TextField {
    const message = { ...baseTextField } as TextField;
    if (object.text !== undefined && object.text !== null) {
      message.text = String(object.text);
    } else {
      message.text = "";
    }
    return message;
  },

  toJSON(message: TextField): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  fromPartial(object: DeepPartial<TextField>): TextField {
    const message = { ...baseTextField } as TextField;
    if (object.text !== undefined && object.text !== null) {
      message.text = object.text;
    } else {
      message.text = "";
    }
    return message;
  },
};

const baseUiOptionDeclaration: object = {
  name: "",
  isMutable: false,
  description: "",
};

export const UiOptionDeclaration = {
  encode(
    message: UiOptionDeclaration,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.isMutable === true) {
      writer.uint32(16).bool(message.isMutable);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.slider !== undefined) {
      Slider.encode(message.slider, writer.uint32(34).fork()).ldelim();
    }
    if (message.checkbox !== undefined) {
      Checkbox.encode(message.checkbox, writer.uint32(42).fork()).ldelim();
    }
    if (message.dropdown !== undefined) {
      Dropdown.encode(message.dropdown, writer.uint32(50).fork()).ldelim();
    }
    if (message.radiobutton !== undefined) {
      RadioButton.encode(
        message.radiobutton,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.textfield !== undefined) {
      TextField.encode(message.textfield, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UiOptionDeclaration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUiOptionDeclaration } as UiOptionDeclaration;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.isMutable = reader.bool();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.slider = Slider.decode(reader, reader.uint32());
          break;
        case 5:
          message.checkbox = Checkbox.decode(reader, reader.uint32());
          break;
        case 6:
          message.dropdown = Dropdown.decode(reader, reader.uint32());
          break;
        case 7:
          message.radiobutton = RadioButton.decode(reader, reader.uint32());
          break;
        case 8:
          message.textfield = TextField.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UiOptionDeclaration {
    const message = { ...baseUiOptionDeclaration } as UiOptionDeclaration;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.isMutable !== undefined && object.isMutable !== null) {
      message.isMutable = Boolean(object.isMutable);
    } else {
      message.isMutable = false;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.slider !== undefined && object.slider !== null) {
      message.slider = Slider.fromJSON(object.slider);
    } else {
      message.slider = undefined;
    }
    if (object.checkbox !== undefined && object.checkbox !== null) {
      message.checkbox = Checkbox.fromJSON(object.checkbox);
    } else {
      message.checkbox = undefined;
    }
    if (object.dropdown !== undefined && object.dropdown !== null) {
      message.dropdown = Dropdown.fromJSON(object.dropdown);
    } else {
      message.dropdown = undefined;
    }
    if (object.radiobutton !== undefined && object.radiobutton !== null) {
      message.radiobutton = RadioButton.fromJSON(object.radiobutton);
    } else {
      message.radiobutton = undefined;
    }
    if (object.textfield !== undefined && object.textfield !== null) {
      message.textfield = TextField.fromJSON(object.textfield);
    } else {
      message.textfield = undefined;
    }
    return message;
  },

  toJSON(message: UiOptionDeclaration): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.isMutable !== undefined && (obj.isMutable = message.isMutable);
    message.description !== undefined &&
      (obj.description = message.description);
    message.slider !== undefined &&
      (obj.slider = message.slider ? Slider.toJSON(message.slider) : undefined);
    message.checkbox !== undefined &&
      (obj.checkbox = message.checkbox
        ? Checkbox.toJSON(message.checkbox)
        : undefined);
    message.dropdown !== undefined &&
      (obj.dropdown = message.dropdown
        ? Dropdown.toJSON(message.dropdown)
        : undefined);
    message.radiobutton !== undefined &&
      (obj.radiobutton = message.radiobutton
        ? RadioButton.toJSON(message.radiobutton)
        : undefined);
    message.textfield !== undefined &&
      (obj.textfield = message.textfield
        ? TextField.toJSON(message.textfield)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UiOptionDeclaration>): UiOptionDeclaration {
    const message = { ...baseUiOptionDeclaration } as UiOptionDeclaration;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.isMutable !== undefined && object.isMutable !== null) {
      message.isMutable = object.isMutable;
    } else {
      message.isMutable = false;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.slider !== undefined && object.slider !== null) {
      message.slider = Slider.fromPartial(object.slider);
    } else {
      message.slider = undefined;
    }
    if (object.checkbox !== undefined && object.checkbox !== null) {
      message.checkbox = Checkbox.fromPartial(object.checkbox);
    } else {
      message.checkbox = undefined;
    }
    if (object.dropdown !== undefined && object.dropdown !== null) {
      message.dropdown = Dropdown.fromPartial(object.dropdown);
    } else {
      message.dropdown = undefined;
    }
    if (object.radiobutton !== undefined && object.radiobutton !== null) {
      message.radiobutton = RadioButton.fromPartial(object.radiobutton);
    } else {
      message.radiobutton = undefined;
    }
    if (object.textfield !== undefined && object.textfield !== null) {
      message.textfield = TextField.fromPartial(object.textfield);
    } else {
      message.textfield = undefined;
    }
    return message;
  },
};

const baseUiOptionDeclarations: object = {};

export const UiOptionDeclarations = {
  encode(
    message: UiOptionDeclarations,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.options) {
      UiOptionDeclaration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UiOptionDeclarations {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUiOptionDeclarations } as UiOptionDeclarations;
    message.options = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.options.push(
            UiOptionDeclaration.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UiOptionDeclarations {
    const message = { ...baseUiOptionDeclarations } as UiOptionDeclarations;
    message.options = [];
    if (object.options !== undefined && object.options !== null) {
      for (const e of object.options) {
        message.options.push(UiOptionDeclaration.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: UiOptionDeclarations): unknown {
    const obj: any = {};
    if (message.options) {
      obj.options = message.options.map((e) =>
        e ? UiOptionDeclaration.toJSON(e) : undefined
      );
    } else {
      obj.options = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<UiOptionDeclarations>): UiOptionDeclarations {
    const message = { ...baseUiOptionDeclarations } as UiOptionDeclarations;
    message.options = [];
    if (object.options !== undefined && object.options !== null) {
      for (const e of object.options) {
        message.options.push(UiOptionDeclaration.fromPartial(e));
      }
    }
    return message;
  },
};

const baseUiValue: object = {};

export const UiValue = {
  encode(
    message: UiValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.floatValue !== undefined) {
      writer.uint32(13).float(message.floatValue);
    }
    if (message.boolValue !== undefined) {
      writer.uint32(16).bool(message.boolValue);
    }
    if (message.integerValue !== undefined) {
      writer.uint32(24).int64(message.integerValue);
    }
    if (message.textValue !== undefined) {
      writer.uint32(34).string(message.textValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UiValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUiValue } as UiValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.floatValue = reader.float();
          break;
        case 2:
          message.boolValue = reader.bool();
          break;
        case 3:
          message.integerValue = reader.int64() as Long;
          break;
        case 4:
          message.textValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UiValue {
    const message = { ...baseUiValue } as UiValue;
    if (object.floatValue !== undefined && object.floatValue !== null) {
      message.floatValue = Number(object.floatValue);
    } else {
      message.floatValue = undefined;
    }
    if (object.boolValue !== undefined && object.boolValue !== null) {
      message.boolValue = Boolean(object.boolValue);
    } else {
      message.boolValue = undefined;
    }
    if (object.integerValue !== undefined && object.integerValue !== null) {
      message.integerValue = Long.fromString(object.integerValue);
    } else {
      message.integerValue = undefined;
    }
    if (object.textValue !== undefined && object.textValue !== null) {
      message.textValue = String(object.textValue);
    } else {
      message.textValue = undefined;
    }
    return message;
  },

  toJSON(message: UiValue): unknown {
    const obj: any = {};
    message.floatValue !== undefined && (obj.floatValue = message.floatValue);
    message.boolValue !== undefined && (obj.boolValue = message.boolValue);
    message.integerValue !== undefined &&
      (obj.integerValue = (message.integerValue || undefined).toString());
    message.textValue !== undefined && (obj.textValue = message.textValue);
    return obj;
  },

  fromPartial(object: DeepPartial<UiValue>): UiValue {
    const message = { ...baseUiValue } as UiValue;
    if (object.floatValue !== undefined && object.floatValue !== null) {
      message.floatValue = object.floatValue;
    } else {
      message.floatValue = undefined;
    }
    if (object.boolValue !== undefined && object.boolValue !== null) {
      message.boolValue = object.boolValue;
    } else {
      message.boolValue = undefined;
    }
    if (object.integerValue !== undefined && object.integerValue !== null) {
      message.integerValue = object.integerValue as Long;
    } else {
      message.integerValue = undefined;
    }
    if (object.textValue !== undefined && object.textValue !== null) {
      message.textValue = object.textValue;
    } else {
      message.textValue = undefined;
    }
    return message;
  },
};

const baseUiValues: object = {};

export const UiValues = {
  encode(
    message: UiValues,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.uiValues).forEach(([key, value]) => {
      UiValues_UiValuesEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UiValues {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUiValues } as UiValues;
    message.uiValues = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = UiValues_UiValuesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.uiValues[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UiValues {
    const message = { ...baseUiValues } as UiValues;
    message.uiValues = {};
    if (object.uiValues !== undefined && object.uiValues !== null) {
      Object.entries(object.uiValues).forEach(([key, value]) => {
        message.uiValues[key] = UiValue.fromJSON(value);
      });
    }
    return message;
  },

  toJSON(message: UiValues): unknown {
    const obj: any = {};
    obj.uiValues = {};
    if (message.uiValues) {
      Object.entries(message.uiValues).forEach(([k, v]) => {
        obj.uiValues[k] = UiValue.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<UiValues>): UiValues {
    const message = { ...baseUiValues } as UiValues;
    message.uiValues = {};
    if (object.uiValues !== undefined && object.uiValues !== null) {
      Object.entries(object.uiValues).forEach(([key, value]) => {
        if (value !== undefined) {
          message.uiValues[key] = UiValue.fromPartial(value);
        }
      });
    }
    return message;
  },
};

const baseUiValues_UiValuesEntry: object = { key: "" };

export const UiValues_UiValuesEntry = {
  encode(
    message: UiValues_UiValuesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      UiValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UiValues_UiValuesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUiValues_UiValuesEntry } as UiValues_UiValuesEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = UiValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UiValues_UiValuesEntry {
    const message = { ...baseUiValues_UiValuesEntry } as UiValues_UiValuesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = UiValue.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: UiValues_UiValuesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? UiValue.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UiValues_UiValuesEntry>
  ): UiValues_UiValuesEntry {
    const message = { ...baseUiValues_UiValuesEntry } as UiValues_UiValuesEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = UiValue.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
