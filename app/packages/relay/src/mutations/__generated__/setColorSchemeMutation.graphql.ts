/**
 * @generated SignedSource<<e5cee0cffc5ea7578304ea3e4a441e3b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type setColorSchemeMutation$variables = {
  colorScheme: object;
  saveToApp: boolean;
  session?: string | null;
  subscription: string;
};
export type setColorSchemeMutation$data = {
  readonly setColorScheme: boolean;
};
export type setColorSchemeMutation = {
  response: setColorSchemeMutation$data;
  variables: setColorSchemeMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "colorScheme"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "saveToApp"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "session"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "subscription"
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "colorScheme",
        "variableName": "colorScheme"
      },
      {
        "kind": "Variable",
        "name": "saveToApp",
        "variableName": "saveToApp"
      },
      {
        "kind": "Variable",
        "name": "session",
        "variableName": "session"
      },
      {
        "kind": "Variable",
        "name": "subscription",
        "variableName": "subscription"
      }
    ],
    "kind": "ScalarField",
    "name": "setColorScheme",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "setColorSchemeMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "setColorSchemeMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "0953f9a982876dcdf31d174461aa2e11",
    "id": null,
    "metadata": {},
    "name": "setColorSchemeMutation",
    "operationKind": "mutation",
    "text": "mutation setColorSchemeMutation(\n  $subscription: String!\n  $session: String\n  $colorScheme: BSON!\n  $saveToApp: Boolean!\n) {\n  setColorScheme(subscription: $subscription, session: $session, colorScheme: $colorScheme, saveToApp: $saveToApp)\n}\n"
  }
};
})();

(node as any).hash = "dcd3d452545a5f3ebdcead5dd547db71";

export default node;
