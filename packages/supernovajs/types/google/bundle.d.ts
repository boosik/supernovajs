import * as _102 from "./api/http";
import * as _103 from "./protobuf/any";
import * as _104 from "./protobuf/descriptor";
import * as _105 from "./protobuf/duration";
import * as _106 from "./protobuf/empty";
import * as _107 from "./protobuf/timestamp";
import * as _108 from "./protobuf/struct";
import * as _109 from "./protobuf/wrappers";
import * as _110 from "./protobuf/field_mask";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _102.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Http;
            fromJSON(object: any): _102.Http;
            toJSON(message: _102.Http): unknown;
            fromPartial(object: Partial<_102.Http>): _102.Http;
        };
        HttpRule: {
            encode(message: _102.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.HttpRule;
            fromJSON(object: any): _102.HttpRule;
            toJSON(message: _102.HttpRule): unknown;
            fromPartial(object: Partial<_102.HttpRule>): _102.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _102.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.CustomHttpPattern;
            fromJSON(object: any): _102.CustomHttpPattern;
            toJSON(message: _102.CustomHttpPattern): unknown;
            fromPartial(object: Partial<_102.CustomHttpPattern>): _102.CustomHttpPattern;
        };
    };
    const protobuf: {
        FieldMask: {
            encode(message: _110.FieldMask, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.FieldMask;
            fromJSON(object: any): _110.FieldMask;
            toJSON(message: _110.FieldMask): unknown;
            fromPartial(object: Partial<_110.FieldMask>): _110.FieldMask;
        };
        DoubleValue: {
            encode(message: _109.DoubleValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.DoubleValue;
            fromJSON(object: any): _109.DoubleValue;
            toJSON(message: _109.DoubleValue): unknown;
            fromPartial(object: Partial<_109.DoubleValue>): _109.DoubleValue;
        };
        FloatValue: {
            encode(message: _109.FloatValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.FloatValue;
            fromJSON(object: any): _109.FloatValue;
            toJSON(message: _109.FloatValue): unknown;
            fromPartial(object: Partial<_109.FloatValue>): _109.FloatValue;
        };
        Int64Value: {
            encode(message: _109.Int64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Int64Value;
            fromJSON(object: any): _109.Int64Value;
            toJSON(message: _109.Int64Value): unknown;
            fromPartial(object: Partial<_109.Int64Value>): _109.Int64Value;
        };
        UInt64Value: {
            encode(message: _109.UInt64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.UInt64Value;
            fromJSON(object: any): _109.UInt64Value;
            toJSON(message: _109.UInt64Value): unknown;
            fromPartial(object: Partial<_109.UInt64Value>): _109.UInt64Value;
        };
        Int32Value: {
            encode(message: _109.Int32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Int32Value;
            fromJSON(object: any): _109.Int32Value;
            toJSON(message: _109.Int32Value): unknown;
            fromPartial(object: Partial<_109.Int32Value>): _109.Int32Value;
        };
        UInt32Value: {
            encode(message: _109.UInt32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.UInt32Value;
            fromJSON(object: any): _109.UInt32Value;
            toJSON(message: _109.UInt32Value): unknown;
            fromPartial(object: Partial<_109.UInt32Value>): _109.UInt32Value;
        };
        BoolValue: {
            encode(message: _109.BoolValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.BoolValue;
            fromJSON(object: any): _109.BoolValue;
            toJSON(message: _109.BoolValue): unknown;
            fromPartial(object: Partial<_109.BoolValue>): _109.BoolValue;
        };
        StringValue: {
            encode(message: _109.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.StringValue;
            fromJSON(object: any): _109.StringValue;
            toJSON(message: _109.StringValue): unknown;
            fromPartial(object: Partial<_109.StringValue>): _109.StringValue;
        };
        BytesValue: {
            encode(message: _109.BytesValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.BytesValue;
            fromJSON(object: any): _109.BytesValue;
            toJSON(message: _109.BytesValue): unknown;
            fromPartial(object: Partial<_109.BytesValue>): _109.BytesValue;
        };
        nullValueFromJSON(object: any): _108.NullValue;
        nullValueToJSON(object: _108.NullValue): string;
        NullValue: typeof _108.NullValue;
        Struct_FieldsEntry: {
            encode(message: _108.Struct_FieldsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Struct_FieldsEntry;
            fromJSON(object: any): _108.Struct_FieldsEntry;
            toJSON(message: _108.Struct_FieldsEntry): unknown;
            fromPartial(object: Partial<_108.Struct_FieldsEntry>): _108.Struct_FieldsEntry;
        };
        Struct: {
            encode(message: _108.Struct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Struct;
            fromJSON(object: any): _108.Struct;
            toJSON(message: _108.Struct): unknown;
            fromPartial(object: Partial<_108.Struct>): _108.Struct;
        };
        Value: {
            encode(message: _108.Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Value;
            fromJSON(object: any): _108.Value;
            toJSON(message: _108.Value): unknown;
            fromPartial(object: Partial<_108.Value>): _108.Value;
        };
        ListValue: {
            encode(message: _108.ListValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ListValue;
            fromJSON(object: any): _108.ListValue;
            toJSON(message: _108.ListValue): unknown;
            fromPartial(object: Partial<_108.ListValue>): _108.ListValue;
        };
        Timestamp: {
            encode(message: _107.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Timestamp;
            fromJSON(object: any): _107.Timestamp;
            toJSON(message: _107.Timestamp): unknown;
            fromPartial(object: Partial<_107.Timestamp>): _107.Timestamp;
        };
        Empty: {
            encode(_: _106.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Empty;
            fromJSON(_: any): _106.Empty;
            toJSON(_: _106.Empty): unknown;
            fromPartial(_: Partial<_106.Empty>): _106.Empty;
        };
        Duration: {
            encode(message: _105.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Duration;
            fromJSON(object: any): _105.Duration;
            toJSON(message: _105.Duration): unknown;
            fromPartial(object: Partial<_105.Duration>): _105.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _104.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _104.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _104.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _104.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _104.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _104.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _104.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _104.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _104.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _104.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _104.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _104.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _104.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _104.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _104.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _104.FieldOptions_CType;
        FieldOptions_JSType: typeof _104.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _104.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _104.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.FileDescriptorSet;
            fromJSON(object: any): _104.FileDescriptorSet;
            toJSON(message: _104.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_104.FileDescriptorSet>): _104.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _104.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.FileDescriptorProto;
            fromJSON(object: any): _104.FileDescriptorProto;
            toJSON(message: _104.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_104.FileDescriptorProto>): _104.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _104.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.DescriptorProto;
            fromJSON(object: any): _104.DescriptorProto;
            toJSON(message: _104.DescriptorProto): unknown;
            fromPartial(object: Partial<_104.DescriptorProto>): _104.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _104.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _104.DescriptorProto_ExtensionRange;
            toJSON(message: _104.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_104.DescriptorProto_ExtensionRange>): _104.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _104.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.DescriptorProto_ReservedRange;
            fromJSON(object: any): _104.DescriptorProto_ReservedRange;
            toJSON(message: _104.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_104.DescriptorProto_ReservedRange>): _104.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _104.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ExtensionRangeOptions;
            fromJSON(object: any): _104.ExtensionRangeOptions;
            toJSON(message: _104.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_104.ExtensionRangeOptions>): _104.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _104.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.FieldDescriptorProto;
            fromJSON(object: any): _104.FieldDescriptorProto;
            toJSON(message: _104.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_104.FieldDescriptorProto>): _104.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _104.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.OneofDescriptorProto;
            fromJSON(object: any): _104.OneofDescriptorProto;
            toJSON(message: _104.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_104.OneofDescriptorProto>): _104.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _104.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.EnumDescriptorProto;
            fromJSON(object: any): _104.EnumDescriptorProto;
            toJSON(message: _104.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_104.EnumDescriptorProto>): _104.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _104.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _104.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _104.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_104.EnumDescriptorProto_EnumReservedRange>): _104.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _104.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.EnumValueDescriptorProto;
            fromJSON(object: any): _104.EnumValueDescriptorProto;
            toJSON(message: _104.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_104.EnumValueDescriptorProto>): _104.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _104.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ServiceDescriptorProto;
            fromJSON(object: any): _104.ServiceDescriptorProto;
            toJSON(message: _104.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_104.ServiceDescriptorProto>): _104.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _104.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MethodDescriptorProto;
            fromJSON(object: any): _104.MethodDescriptorProto;
            toJSON(message: _104.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_104.MethodDescriptorProto>): _104.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _104.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.FileOptions;
            fromJSON(object: any): _104.FileOptions;
            toJSON(message: _104.FileOptions): unknown;
            fromPartial(object: Partial<_104.FileOptions>): _104.FileOptions;
        };
        MessageOptions: {
            encode(message: _104.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MessageOptions;
            fromJSON(object: any): _104.MessageOptions;
            toJSON(message: _104.MessageOptions): unknown;
            fromPartial(object: Partial<_104.MessageOptions>): _104.MessageOptions;
        };
        FieldOptions: {
            encode(message: _104.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.FieldOptions;
            fromJSON(object: any): _104.FieldOptions;
            toJSON(message: _104.FieldOptions): unknown;
            fromPartial(object: Partial<_104.FieldOptions>): _104.FieldOptions;
        };
        OneofOptions: {
            encode(message: _104.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.OneofOptions;
            fromJSON(object: any): _104.OneofOptions;
            toJSON(message: _104.OneofOptions): unknown;
            fromPartial(object: Partial<_104.OneofOptions>): _104.OneofOptions;
        };
        EnumOptions: {
            encode(message: _104.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.EnumOptions;
            fromJSON(object: any): _104.EnumOptions;
            toJSON(message: _104.EnumOptions): unknown;
            fromPartial(object: Partial<_104.EnumOptions>): _104.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _104.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.EnumValueOptions;
            fromJSON(object: any): _104.EnumValueOptions;
            toJSON(message: _104.EnumValueOptions): unknown;
            fromPartial(object: Partial<_104.EnumValueOptions>): _104.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _104.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ServiceOptions;
            fromJSON(object: any): _104.ServiceOptions;
            toJSON(message: _104.ServiceOptions): unknown;
            fromPartial(object: Partial<_104.ServiceOptions>): _104.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _104.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MethodOptions;
            fromJSON(object: any): _104.MethodOptions;
            toJSON(message: _104.MethodOptions): unknown;
            fromPartial(object: Partial<_104.MethodOptions>): _104.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _104.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.UninterpretedOption;
            fromJSON(object: any): _104.UninterpretedOption;
            toJSON(message: _104.UninterpretedOption): unknown;
            fromPartial(object: Partial<_104.UninterpretedOption>): _104.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _104.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.UninterpretedOption_NamePart;
            fromJSON(object: any): _104.UninterpretedOption_NamePart;
            toJSON(message: _104.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_104.UninterpretedOption_NamePart>): _104.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _104.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.SourceCodeInfo;
            fromJSON(object: any): _104.SourceCodeInfo;
            toJSON(message: _104.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_104.SourceCodeInfo>): _104.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _104.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.SourceCodeInfo_Location;
            fromJSON(object: any): _104.SourceCodeInfo_Location;
            toJSON(message: _104.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_104.SourceCodeInfo_Location>): _104.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _104.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.GeneratedCodeInfo;
            fromJSON(object: any): _104.GeneratedCodeInfo;
            toJSON(message: _104.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_104.GeneratedCodeInfo>): _104.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _104.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _104.GeneratedCodeInfo_Annotation;
            toJSON(message: _104.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_104.GeneratedCodeInfo_Annotation>): _104.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _103.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Any;
            fromJSON(object: any): _103.Any;
            toJSON(message: _103.Any): unknown;
            fromPartial(object: Partial<_103.Any>): _103.Any;
        };
    };
}
