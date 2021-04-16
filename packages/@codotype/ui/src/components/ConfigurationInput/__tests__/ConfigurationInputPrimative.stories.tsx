import * as React from "react";
import { storiesOf } from "@storybook/react";
import { ConfigurationInputPrimative } from "../ConfigurationInputPrimative";
import {
    ConfigurationProperty,
    ConfigurationPropertyValue,
    testState,
    StringPropertyTransformations,
    NumberPropertyTransformations,
} from "@codotype/core";
const {
    ComponentBuilderConfigurationPropertySingleDropdown,
    ComponentBuilderConfigurationPropertySingleNumber,
    ComponentBuilderConfigurationPropertySingleText,
    twitterApiOption,
} = testState;
import { Story } from "../../Story";

// // // //

const stories: Array<[
    string,
    ConfigurationProperty,
    ConfigurationPropertyValue,
]> = [
    [
        "dropdown",
        ComponentBuilderConfigurationPropertySingleDropdown,
        "OPTION_01",
    ],
    ["number", ComponentBuilderConfigurationPropertySingleNumber, 10],
    ["string", ComponentBuilderConfigurationPropertySingleText, "foobar"],
    ["boolean", twitterApiOption, true],
];

// // // //

const storyCollection = storiesOf(
    "Components/ProjectEditor/ConfigurationEditor/ConfigurationInputPrimative",
    module,
);

stories.forEach(story => {
    storyCollection.add(story[0], () => {
        const [value, setValue] = React.useState<ConfigurationPropertyValue>(
            story[2],
        );
        return (
            <Story>
                <ConfigurationInputPrimative
                    property={story[1]}
                    value={value}
                    onChange={(updatedValue: ConfigurationPropertyValue) => {
                        setValue(updatedValue);
                    }}
                />
            </Story>
        );
    });
});

// // // //

const numberPropertyFilterStories = storiesOf(
    "Components/ProjectEditor/ConfigurationEditor/ConfigurationInputPrimative/StringPropertyFilter",
    module,
);

[
    [StringPropertyTransformations.lowercase],
    [StringPropertyTransformations.uppercase],
    [StringPropertyTransformations.titlecase],
    [StringPropertyTransformations.camelcase],
    [StringPropertyTransformations.snakecase],
    [StringPropertyTransformations.pascalcase],
    [StringPropertyTransformations.kebabcase],
    [StringPropertyTransformations.nonumbers],
    [StringPropertyTransformations.nosymbols],
    [StringPropertyTransformations.trimwhitespace],
    [StringPropertyTransformations.removewhitespace],
    [
        StringPropertyTransformations.nosymbols,
        StringPropertyTransformations.snakecase,
    ],
    [
        StringPropertyTransformations.nosymbols,
        StringPropertyTransformations.pascalcase,
    ],
    [
        StringPropertyTransformations.nosymbols,
        StringPropertyTransformations.nonumbers,
        StringPropertyTransformations.titlecase,
        StringPropertyTransformations.titlecase,
        StringPropertyTransformations.removewhitespace,
    ],
].forEach(propertyFilters => {
    numberPropertyFilterStories.add(propertyFilters.join(" + "), () => {
        const [value, setValue] = React.useState<ConfigurationPropertyValue>(
            "",
        );
        return (
            <Story>
                <pre>{propertyFilters.join(" + ")}</pre>
                <ConfigurationInputPrimative
                    property={{
                        ...ComponentBuilderConfigurationPropertySingleText,
                        transformations: [...propertyFilters],
                    }}
                    value={value}
                    onChange={(updatedValue: ConfigurationPropertyValue) => {
                        setValue(updatedValue);
                    }}
                />
            </Story>
        );
    });
});

// // // //

const stringPropertyFilterStories = storiesOf(
    "Components/ProjectEditor/ConfigurationEditor/ConfigurationInputPrimative/NumberPropertyFilter",
    module,
);

[
    [NumberPropertyTransformations.integerValue],
    [NumberPropertyTransformations.negativeValue],
    [NumberPropertyTransformations.positiveValue],
    [
        NumberPropertyTransformations.positiveValue,
        NumberPropertyTransformations.integerValue,
    ],
].forEach(propertyFilters => {
    stringPropertyFilterStories.add(propertyFilters.join(" + "), () => {
        const [value, setValue] = React.useState<ConfigurationPropertyValue>(
            "",
        );
        return (
            <Story>
                <pre>{propertyFilters.join(" + ")}</pre>
                <ConfigurationInputPrimative
                    property={{
                        ...ComponentBuilderConfigurationPropertySingleNumber,
                        transformations: [...propertyFilters],
                    }}
                    value={value}
                    onChange={(updatedValue: ConfigurationPropertyValue) => {
                        setValue(updatedValue);
                    }}
                />
            </Story>
        );
    });
});