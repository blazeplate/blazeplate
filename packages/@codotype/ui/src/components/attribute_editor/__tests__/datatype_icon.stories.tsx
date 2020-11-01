import * as React from "react";
import { storiesOf } from "@storybook/react";
import { DatatypeIcon } from "../DatatypeIcon";
import { Story } from "../../dev";
import { Datatype } from "@codotype/core";

// // // //

const testCases: [string, Datatype][] = [
    ["Datatypes.STRING", Datatypes.STRING],
    ["Datatypes.TEXT", Datatypes.TEXT],
    ["Datatypes.INTEGER", Datatypes.INTEGER],
    ["Datatypes.BIGINT", Datatypes.BIGINT],
    ["Datatypes.FLOAT", Datatypes.FLOAT],
    ["Datatypes.DECIMAL", Datatypes.DECIMAL],
    ["Datatypes.NUMERIC", Datatypes.NUMERIC],
    ["Datatypes.BOOLEAN", Datatypes.BOOLEAN],
    ["Datatypes.DATE", Datatypes.DATE],
    ["Datatypes.TIME", Datatypes.TIME],
    ["Datatypes.DATETIME", Datatypes.DATETIME],
    ["Datatypes.TIMESTAMP", Datatypes.TIMESTAMP],
    ["Datatypes.BINARY", Datatypes.BINARY],
    ["Datatypes.JSON", Datatypes.JSON],
    ["Datatypes.JSONB", Datatypes.JSONB],
    ["Datatypes.OBJECT", Datatypes.OBJECT],
    ["Datatypes.STRING_ARRAY", Datatypes.STRING_ARRAY],
    ["Datatypes.TEXT_ARRAY", Datatypes.TEXT_ARRAY],
    ["Datatypes.INTEGER_ARRAY", Datatypes.INTEGER_ARRAY],
    ["Datatypes.BIGINT_ARRAY", Datatypes.BIGINT_ARRAY],
    ["Datatypes.FLOAT_ARRAY", Datatypes.FLOAT_ARRAY],
    ["Datatypes.DECIMAL_ARRAY", Datatypes.DECIMAL_ARRAY],
    ["Datatypes.NUMERIC_ARRAY", Datatypes.NUMERIC_ARRAY],
    ["Datatypes.BOOLEAN_ARRAY", Datatypes.BOOLEAN_ARRAY],
    ["Datatypes.DATE_ARRAY", Datatypes.DATE_ARRAY],
    ["Datatypes.TIME_ARRAY", Datatypes.TIME_ARRAY],
    ["Datatypes.DATETIME_ARRAY", Datatypes.DATETIME_ARRAY],
    ["Datatypes.TIMESTAMP_ARRAY", Datatypes.TIMESTAMP_ARRAY],
    ["Datatypes.SINGLE_FILE", Datatypes.SINGLE_FILE],
    ["Datatypes.SINGLE_IMAGE", Datatypes.SINGLE_IMAGE],
];

const storyCollection = storiesOf(
    "ProjectEditor/AttributeEditor/DatatypeIcon",
    module,
);
storyCollection.add("all variants", () => {
    return (
        <Story>
            <p>All Icons:</p>
            <div className="row">
                {testCases.map(testCase => {
                    return (
                        <div className="col-sm-4">
                            <div className="card card-body mb-3">
                                <div className="row">
                                    <div className="col-sm-9">
                                        <p className="mb-0">{testCase[0]}</p>
                                    </div>
                                    <div className="col-sm-3 d-flex justify-content-end">
                                        <DatatypeIcon datatype={testCase[1]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Story>
    );
});
