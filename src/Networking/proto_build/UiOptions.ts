/* eslint-disable */
import * as Long from "long";
import { Writer, Reader } from "protobufjs/minimal";

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

export interface UiOption {
  name: string;
  slider: Slider | undefined;
  checkbox: Checkbox | undefined;
  dropdown: Dropdown | undefined;
  radiobutton: RadioButton | undefined;
  textfield: TextField | undefined;
}

export interface PossibleUiValue {
  floatValue: number | undefined;
  boolValue: boolean | undefined;
  integerValue: Long | undefined;
  textValue: string | undefined;
}

export interface UiSettings {
  /** maps UiOption::name to the value it currently contains. */
  uiValues: { [key: string]: PossibleUiValue };
}

export interface UiSettings_UiValuesEntry {
  key: string;
  value: PossibleUiValue | undefined;
}

const baseSlider: object = {
  text: "",
  min: 0,
  max: 0,
  interval: 0,
  default: 0,
};

export const Slider = {
  encode(message: Slider, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): Slider {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseSlider) as Slider;
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
};

const baseCheckbox: object = { text: "", default: false };

export const Checkbox = {
  encode(message: Checkbox, writer: Writer = Writer.create()): Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.default === true) {
      writer.uint32(16).bool(message.default);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Checkbox {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseCheckbox) as Checkbox;
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
};

const baseDropdown: object = { text: "", default: Long.ZERO, options: "" };

export const Dropdown = {
  encode(message: Dropdown, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): Dropdown {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseDropdown) as Dropdown;
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
};

const baseRadioButton: object = { default: Long.ZERO, options: "" };

export const RadioButton = {
  encode(message: RadioButton, writer: Writer = Writer.create()): Writer {
    if (!message.default.isZero()) {
      writer.uint32(8).int64(message.default);
    }
    for (const v of message.options) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RadioButton {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseRadioButton) as RadioButton;
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
};

const baseTextField: object = { text: "" };

export const TextField = {
  encode(message: TextField, writer: Writer = Writer.create()): Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TextField {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseTextField) as TextField;
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
};

const baseUiOption: object = { name: "" };

export const UiOption = {
  encode(message: UiOption, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.slider !== undefined) {
      Slider.encode(message.slider, writer.uint32(18).fork()).ldelim();
    }
    if (message.checkbox !== undefined) {
      Checkbox.encode(message.checkbox, writer.uint32(26).fork()).ldelim();
    }
    if (message.dropdown !== undefined) {
      Dropdown.encode(message.dropdown, writer.uint32(34).fork()).ldelim();
    }
    if (message.radiobutton !== undefined) {
      RadioButton.encode(
        message.radiobutton,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.textfield !== undefined) {
      TextField.encode(message.textfield, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UiOption {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseUiOption) as UiOption;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.slider = Slider.decode(reader, reader.uint32());
          break;
        case 3:
          message.checkbox = Checkbox.decode(reader, reader.uint32());
          break;
        case 4:
          message.dropdown = Dropdown.decode(reader, reader.uint32());
          break;
        case 5:
          message.radiobutton = RadioButton.decode(reader, reader.uint32());
          break;
        case 6:
          message.textfield = TextField.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

const basePossibleUiValue: object = {};

export const PossibleUiValue = {
  encode(message: PossibleUiValue, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): PossibleUiValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      basePossibleUiValue
    ) as PossibleUiValue;
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
};

const baseUiSettings: object = {};

export const UiSettings = {
  encode(message: UiSettings, writer: Writer = Writer.create()): Writer {
    Object.entries(message.uiValues).forEach(([key, value]) => {
      UiSettings_UiValuesEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UiSettings {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseUiSettings) as UiSettings;
    message.uiValues = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = UiSettings_UiValuesEntry.decode(
            reader,
            reader.uint32()
          );
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
};

const baseUiSettings_UiValuesEntry: object = { key: "" };

export const UiSettings_UiValuesEntry = {
  encode(
    message: UiSettings_UiValuesEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      PossibleUiValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): UiSettings_UiValuesEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseUiSettings_UiValuesEntry
    ) as UiSettings_UiValuesEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = PossibleUiValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();
