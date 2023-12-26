export const data = [
  {
    "project": "core",
    "folders": [
      {
        "name": "Project",
        "subfolder": true,
        "description": "",
        "inputs": [
          {
            "name": "id",
            "type": "String",
            "default": "NA",
            "required": "required",
            "description": "This is the id of the element you want to append the project"
          }
        ],
        "outputs": [
          {
            "name": "reset",
            "type": "Function",
            "description": "This will clear the canvas"
          },
          {
            "name": "import",
            "type": "Function",
            "description": "This allows you to create elements from json"
          },
          {
            "name": "export",
            "type": "Function",
            "description": "This will return a copy of the canvas to a format of your choosing"
          },
          {
            "name": "destroy",
            "type": "Function",
            "description": "This will remoce the project from the element the it is appended to"
          }
        ],
        "items": []
      },
      {
        "name": "Shapes",
        "subfolder": true,
        "items": [
          {
            "title": "Chart",
            "usage": "import { Chart } from '@ngx-canvas/core';\n\nconst shape = new Chart();",
            "description": "This will add a chart to the canvas",
            "inputs": [
              {
                "name": "id",
                "type": "String",
                "default": "ObjectId()",
                "required": "Optional",
                "description": "This is the unique identifier of a shape"
              },
              {
                "name": "fill",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=fill'>Fill</a>",
                "default": "new Fill()",
                "required": "Optional",
                "description": "This will control the fill color and style"
              },
              {
                "name": "font",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=font'>Font</a>",
                "default": "new Font()",
                "required": "Optional",
                "description": "This will control the font color and style"
              },
              {
                "name": "data",
                "type": "any",
                "default": "",
                "required": "Optional",
                "description": "Still thinking this one through, maybe just use to store data?"
              },
              {
                "name": "type",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "This will control the what shape is drawn on the canvas"
              },
              {
                "name": "name",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "You can use this to give names to your shapes"
              },
              {
                "name": "stroke",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=stroke'>Stroke</a>",
                "default": "new Stroke()",
                "required": "Optional",
                "description": "This will control the stroke/line color and style"
              },
              {
                "name": "hidden",
                "type": "Boolean",
                "default": "false",
                "required": "Optional",
                "description": "This will control the visibility of a shape"
              },
              {
                "name": "position",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=position'>Position</a>",
                "default": "new Position()",
                "required": "Optional",
                "description": "This will provide all coordinates and sizing of a shape"
              },
              {
                "name": "conditions",
                "type": "any[]",
                "default": "[]",
                "required": "Optional",
                "description": "Still thinking this one through..."
              }
            ],
            "outputs": [
              {
                "name": "apply",
                "type": "Function",
                "description": "Adds the shape to the canvas, can only be called once per shape"
              },
              {
                "name": "update",
                "type": "Function",
                "description": "Modifies a shapes attributes and styles based on values supplied"
              },
              {
                "name": "remove",
                "type": "Function",
                "description": "Removes the shape from the canvas, can only be called once per shape"
              }
            ],
            "folder": "shapes"
          },
          {
            "title": "Curve",
            "usage": "import { Curve } from '@ngx-canvas/core';\n\nconst shape = new Curve();",
            "description": "This will add a curve to the canvas",
            "inputs": [
              {
                "name": "id",
                "type": "String",
                "default": "ObjectId()",
                "required": "Optional",
                "description": "This is the unique identifier of a shape"
              },
              {
                "name": "fill",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=fill'>Fill</a>",
                "default": "new Fill()",
                "required": "Optional",
                "description": "This will control the fill color and style"
              },
              {
                "name": "font",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=font'>Font</a>",
                "default": "new Font()",
                "required": "Optional",
                "description": "This will control the font color and style"
              },
              {
                "name": "data",
                "type": "any",
                "default": "",
                "required": "Optional",
                "description": "Still thinking this one through, maybe just use to store data?"
              },
              {
                "name": "type",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "This will control the what shape is drawn on the canvas"
              },
              {
                "name": "name",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "You can use this to give names to your shapes"
              },
              {
                "name": "stroke",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=stroke'>Stroke</a>",
                "default": "new Stroke()",
                "required": "Optional",
                "description": "This will control the stroke/line color and style"
              },
              {
                "name": "hidden",
                "type": "Boolean",
                "default": "false",
                "required": "Optional",
                "description": "This will control the visibility of a shape"
              },
              {
                "name": "position",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=position'>Position</a>",
                "default": "new Position()",
                "required": "Optional",
                "description": "This will provide all coordinates and sizing of a shape"
              },
              {
                "name": "conditions",
                "type": "any[]",
                "default": "[]",
                "required": "Optional",
                "description": "Still thinking this one through..."
              }
            ],
            "outputs": [
              {
                "name": "apply",
                "type": "Function",
                "description": "Adds the shape to the canvas, can only be called once per shape"
              },
              {
                "name": "update",
                "type": "Function",
                "description": "Modifies a shapes attributes and styles based on values supplied"
              },
              {
                "name": "remove",
                "type": "Function",
                "description": "Removes the shape from the canvas, can only be called once per shape"
              }
            ],
            "folder": "shapes"
          },
          {
            "title": "Ellipse",
            "usage": "import { Ellipse } from '@ngx-canvas/core';\n\nconst shape = new Ellipse();",
            "description": "This will add a ellipse to the canvas",
            "inputs": [
              {
                "name": "id",
                "type": "String",
                "default": "ObjectId()",
                "required": "Optional",
                "description": "This is the unique identifier of a shape"
              },
              {
                "name": "fill",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=fill'>Fill</a>",
                "default": "new Fill()",
                "required": "Optional",
                "description": "This will control the fill color and style"
              },
              {
                "name": "font",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=font'>Font</a>",
                "default": "new Font()",
                "required": "Optional",
                "description": "This will control the font color and style"
              },
              {
                "name": "data",
                "type": "any",
                "default": "",
                "required": "Optional",
                "description": "Still thinking this one through, maybe just use to store data?"
              },
              {
                "name": "type",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "This will control the what shape is drawn on the canvas"
              },
              {
                "name": "name",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "You can use this to give names to your shapes"
              },
              {
                "name": "stroke",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=stroke'>Stroke</a>",
                "default": "new Stroke()",
                "required": "Optional",
                "description": "This will control the stroke/line color and style"
              },
              {
                "name": "hidden",
                "type": "Boolean",
                "default": "false",
                "required": "Optional",
                "description": "This will control the visibility of a shape"
              },
              {
                "name": "position",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=position'>Position</a>",
                "default": "new Position()",
                "required": "Optional",
                "description": "This will provide all coordinates and sizing of a shape"
              },
              {
                "name": "conditions",
                "type": "any[]",
                "default": "[]",
                "required": "Optional",
                "description": "Still thinking this one through..."
              }
            ],
            "outputs": [
              {
                "name": "apply",
                "type": "Function",
                "description": "Adds the shape to the canvas, can only be called once per shape"
              },
              {
                "name": "update",
                "type": "Function",
                "description": "Modifies a shapes attributes and styles based on values supplied"
              },
              {
                "name": "remove",
                "type": "Function",
                "description": "Removes the shape from the canvas, can only be called once per shape"
              }
            ],
            "folder": "shapes"
          },
          {
            "title": "Group",
            "usage": "import { Line } from '@ngx-canvas/core';\n\nconst shape = new Line();",
            "description": "This will add a group to the canvas",
            "inputs": [
              {
                "name": "id",
                "type": "String",
                "default": "ObjectId()",
                "required": "Optional",
                "description": "This is the unique identifier of a shape"
              },
              {
                "name": "fill",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=fill'>Fill</a>",
                "default": "new Fill()",
                "required": "Optional",
                "description": "This will control the fill color and style"
              },
              {
                "name": "font",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=font'>Font</a>",
                "default": "new Font()",
                "required": "Optional",
                "description": "This will control the font color and style"
              },
              {
                "name": "data",
                "type": "any",
                "default": "",
                "required": "Optional",
                "description": "Still thinking this one through, maybe just use to store data?"
              },
              {
                "name": "type",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "This will control the what shape is drawn on the canvas"
              },
              {
                "name": "name",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "You can use this to give names to your shapes"
              },
              {
                "name": "stroke",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=stroke'>Stroke</a>",
                "default": "new Stroke()",
                "required": "Optional",
                "description": "This will control the stroke/line color and style"
              },
              {
                "name": "hidden",
                "type": "Boolean",
                "default": "false",
                "required": "Optional",
                "description": "This will control the visibility of a shape"
              },
              {
                "name": "children",
                "type": "Shape[]",
                "default": "[]",
                "required": "optional",
                "description": ""
              },
              {
                "name": "position",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=position'>Position</a>",
                "default": "new Position()",
                "required": "Optional",
                "description": "This will provide all coordinates and sizing of a shape"
              },
              {
                "name": "conditions",
                "type": "any[]",
                "default": "[]",
                "required": "Optional",
                "description": "Still thinking this one through..."
              }
            ],
            "outputs": [
              {
                "name": "apply",
                "type": "Function",
                "description": "Adds the shape to the canvas, can only be called once per shape"
              },
              {
                "name": "update",
                "type": "Function",
                "description": "Modifies a shapes attributes and styles based on values supplied"
              },
              {
                "name": "remove",
                "type": "Function",
                "description": "Removes the shape from the canvas, can only be called once per shape"
              }
            ],
            "folder": "shapes"
          },
          {
            "title": "Iframe",
            "usage": "import { Iframe } from '@ngx-canvas/core';\n\nconst shape = new Iframe();",
            "description": "This will add an iframe to the canvas",
            "inputs": [
              {
                "name": "id",
                "type": "String",
                "default": "ObjectId()",
                "required": "Optional",
                "description": "This is the unique identifier of a shape"
              },
              {
                "name": "src",
                "type": "String",
                "default": "''",
                "required": "optional",
                "description": ""
              },
              {
                "name": "fill",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=fill'>Fill</a>",
                "default": "new Fill()",
                "required": "Optional",
                "description": "This will control the fill color and style"
              },
              {
                "name": "font",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=font'>Font</a>",
                "default": "new Font()",
                "required": "Optional",
                "description": "This will control the font color and style"
              },
              {
                "name": "data",
                "type": "any",
                "default": "",
                "required": "Optional",
                "description": "Still thinking this one through, maybe just use to store data?"
              },
              {
                "name": "type",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "This will control the what shape is drawn on the canvas"
              },
              {
                "name": "name",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "You can use this to give names to your shapes"
              },
              {
                "name": "title",
                "type": "String",
                "default": "''",
                "required": "optional",
                "description": ""
              },
              {
                "name": "stroke",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=stroke'>Stroke</a>",
                "default": "new Stroke()",
                "required": "Optional",
                "description": "This will control the stroke/line color and style"
              },
              {
                "name": "hidden",
                "type": "Boolean",
                "default": "false",
                "required": "Optional",
                "description": "This will control the visibility of a shape"
              },
              {
                "name": "position",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=position'>Position</a>",
                "default": "new Position()",
                "required": "Optional",
                "description": "This will provide all coordinates and sizing of a shape"
              },
              {
                "name": "conditions",
                "type": "any[]",
                "default": "[]",
                "required": "Optional",
                "description": "Still thinking this one through..."
              }
            ],
            "outputs": [
              {
                "name": "apply",
                "type": "Function",
                "description": "Adds the shape to the canvas, can only be called once per shape"
              },
              {
                "name": "update",
                "type": "Function",
                "description": "Modifies a shapes attributes and styles based on values supplied"
              },
              {
                "name": "remove",
                "type": "Function",
                "description": "Removes the shape from the canvas, can only be called once per shape"
              }
            ],
            "folder": "shapes"
          },
          {
            "title": "Line",
            "usage": "import { Line } from '@ngx-canvas/core';\n\nconst shape = new Line();",
            "description": "This will add a line to the canvas",
            "inputs": [
              {
                "name": "id",
                "type": "String",
                "default": "ObjectId()",
                "required": "Optional",
                "description": "This is the unique identifier of a shape"
              },
              {
                "name": "fill",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=fill'>Fill</a>",
                "default": "new Fill()",
                "required": "Optional",
                "description": "This will control the fill color and style"
              },
              {
                "name": "font",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=font'>Font</a>",
                "default": "new Font()",
                "required": "Optional",
                "description": "This will control the font color and style"
              },
              {
                "name": "data",
                "type": "any",
                "default": "",
                "required": "Optional",
                "description": "Still thinking this one through, maybe just use to store data?"
              },
              {
                "name": "type",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "This will control the what shape is drawn on the canvas"
              },
              {
                "name": "name",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "You can use this to give names to your shapes"
              },
              {
                "name": "points",
                "type": "Point[]",
                "default": "[]",
                "required": "optional",
                "description": ""
              },
              {
                "name": "stroke",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=stroke'>Stroke</a>",
                "default": "new Stroke()",
                "required": "Optional",
                "description": "This will control the stroke/line color and style"
              },
              {
                "name": "hidden",
                "type": "Boolean",
                "default": "false",
                "required": "Optional",
                "description": "This will control the visibility of a shape"
              },
              {
                "name": "position",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=position'>Position</a>",
                "default": "new Position()",
                "required": "Optional",
                "description": "This will provide all coordinates and sizing of a shape"
              },
              {
                "name": "conditions",
                "type": "any[]",
                "default": "[]",
                "required": "Optional",
                "description": "Still thinking this one through..."
              }
            ],
            "outputs": [
              {
                "name": "apply",
                "type": "Function",
                "description": "Adds the shape to the canvas, can only be called once per shape"
              },
              {
                "name": "update",
                "type": "Function",
                "description": "Modifies a shapes attributes and styles based on values supplied"
              },
              {
                "name": "remove",
                "type": "Function",
                "description": "Removes the shape from the canvas, can only be called once per shape"
              }
            ],
            "folder": "shapes"
          },
          {
            "title": "Polygon",
            "usage": "import { Polygon } from '@ngx-canvas/core';\n\nconst shape = new Polygon();",
            "description": "This will add a polygon to the canvas",
            "inputs": [
              {
                "name": "id",
                "type": "String",
                "default": "ObjectId()",
                "required": "Optional",
                "description": "This is the unique identifier of a shape"
              },
              {
                "name": "fill",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=fill'>Fill</a>",
                "default": "new Fill()",
                "required": "Optional",
                "description": "This will control the fill color and style"
              },
              {
                "name": "font",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=font'>Font</a>",
                "default": "new Font()",
                "required": "Optional",
                "description": "This will control the font color and style"
              },
              {
                "name": "data",
                "type": "any",
                "default": "",
                "required": "Optional",
                "description": "Still thinking this one through, maybe just use to store data?"
              },
              {
                "name": "type",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "This will control the what shape is drawn on the canvas"
              },
              {
                "name": "name",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "You can use this to give names to your shapes"
              },
              {
                "name": "points",
                "type": "Point[]",
                "default": "[]",
                "required": "optional",
                "description": ""
              },
              {
                "name": "stroke",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=stroke'>Stroke</a>",
                "default": "new Stroke()",
                "required": "Optional",
                "description": "This will control the stroke/line color and style"
              },
              {
                "name": "hidden",
                "type": "Boolean",
                "default": "false",
                "required": "Optional",
                "description": "This will control the visibility of a shape"
              },
              {
                "name": "position",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=position'>Position</a>",
                "default": "new Position()",
                "required": "Optional",
                "description": "This will provide all coordinates and sizing of a shape"
              },
              {
                "name": "conditions",
                "type": "any[]",
                "default": "[]",
                "required": "Optional",
                "description": "Still thinking this one through..."
              }
            ],
            "outputs": [
              {
                "name": "apply",
                "type": "Function",
                "description": "Adds the shape to the canvas, can only be called once per shape"
              },
              {
                "name": "update",
                "type": "Function",
                "description": "Modifies a shapes attributes and styles based on values supplied"
              },
              {
                "name": "remove",
                "type": "Function",
                "description": "Removes the shape from the canvas, can only be called once per shape"
              }
            ],
            "folder": "shapes"
          },
          {
            "title": "Polyline",
            "usage": "import { Polyline } from '@ngx-canvas/core';\n\nconst shape = new Polyline();",
            "description": "This will add a polyline to the canvas",
            "inputs": [
              {
                "name": "id",
                "type": "String",
                "default": "ObjectId()",
                "required": "Optional",
                "description": "This is the unique identifier of a shape"
              },
              {
                "name": "fill",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=fill'>Fill</a>",
                "default": "new Fill()",
                "required": "Optional",
                "description": "This will control the fill color and style"
              },
              {
                "name": "font",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=font'>Font</a>",
                "default": "new Font()",
                "required": "Optional",
                "description": "This will control the font color and style"
              },
              {
                "name": "data",
                "type": "any",
                "default": "",
                "required": "Optional",
                "description": "Still thinking this one through, maybe just use to store data?"
              },
              {
                "name": "type",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "This will control the what shape is drawn on the canvas"
              },
              {
                "name": "name",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "You can use this to give names to your shapes"
              },
              {
                "name": "points",
                "type": "Point[]",
                "default": "[]",
                "required": "optional",
                "description": ""
              },
              {
                "name": "stroke",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=stroke'>Stroke</a>",
                "default": "new Stroke()",
                "required": "Optional",
                "description": "This will control the stroke/line color and style"
              },
              {
                "name": "hidden",
                "type": "Boolean",
                "default": "false",
                "required": "Optional",
                "description": "This will control the visibility of a shape"
              },
              {
                "name": "position",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=position'>Position</a>",
                "default": "new Position()",
                "required": "Optional",
                "description": "This will provide all coordinates and sizing of a shape"
              },
              {
                "name": "conditions",
                "type": "any[]",
                "default": "[]",
                "required": "Optional",
                "description": "Still thinking this one through..."
              }
            ],
            "outputs": [
              {
                "name": "apply",
                "type": "Function",
                "description": "Adds the shape to the canvas, can only be called once per shape"
              },
              {
                "name": "update",
                "type": "Function",
                "description": "Modifies a shapes attributes and styles based on values supplied"
              },
              {
                "name": "remove",
                "type": "Function",
                "description": "Removes the shape from the canvas, can only be called once per shape"
              }
            ],
            "folder": "shapes"
          },
          {
            "title": "Range",
            "usage": "import { Range } from '@ngx-canvas/core';\n\nconst shape = new Range();",
            "description": "This will add a range to the canvas",
            "inputs": [
              {
                "name": "id",
                "type": "String",
                "default": "ObjectId()",
                "required": "Optional",
                "description": "This is the unique identifier of a shape"
              },
              {
                "name": "min",
                "type": "Number",
                "default": "0",
                "required": "Optional",
                "description": ""
              },
              {
                "name": "max",
                "type": "Number",
                "default": "100",
                "required": "Optional",
                "description": ""
              },
              {
                "name": "step",
                "type": "Number",
                "default": "1",
                "required": "Optional",
                "description": ""
              },
              {
                "name": "fill",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=fill'>Fill</a>",
                "default": "new Fill()",
                "required": "Optional",
                "description": "This will control the fill color and style"
              },
              {
                "name": "font",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=font'>Font</a>",
                "default": "new Font()",
                "required": "Optional",
                "description": "This will control the font color and style"
              },
              {
                "name": "data",
                "type": "any",
                "default": "",
                "required": "Optional",
                "description": "Still thinking this one through, maybe just use to store data?"
              },
              {
                "name": "type",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "This will control the what shape is drawn on the canvas"
              },
              {
                "name": "name",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "You can use this to give names to your shapes"
              },
              {
                "name": "value",
                "type": "Number",
                "default": "0",
                "required": "Optional",
                "description": ""
              },
              {
                "name": "stroke",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=stroke'>Stroke</a>",
                "default": "new Stroke()",
                "required": "Optional",
                "description": "This will control the stroke/line color and style"
              },
              {
                "name": "hidden",
                "type": "Boolean",
                "default": "false",
                "required": "Optional",
                "description": "This will control the visibility of a shape"
              },
              {
                "name": "position",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=position'>Position</a>",
                "default": "new Position()",
                "required": "Optional",
                "description": "This will provide all coordinates and sizing of a shape"
              },
              {
                "name": "conditions",
                "type": "any[]",
                "default": "[]",
                "required": "Optional",
                "description": "Still thinking this one through..."
              }
            ],
            "outputs": [
              {
                "name": "apply",
                "type": "Function",
                "description": "Adds the shape to the canvas, can only be called once per shape"
              },
              {
                "name": "update",
                "type": "Function",
                "description": "Modifies a shapes attributes and styles based on values supplied"
              },
              {
                "name": "remove",
                "type": "Function",
                "description": "Removes the shape from the canvas, can only be called once per shape"
              }
            ],
            "folder": "shapes"
          },
          {
            "title": "Rectangle",
            "usage": "import { Rectangle } from '@ngx-canvas/core';\n\nconst shape = new Rectangle();",
            "description": "This will add a rectangle to the canvas",
            "inputs": [
              {
                "name": "id",
                "type": "String",
                "default": "ObjectId()",
                "required": "Optional",
                "description": "This is the unique identifier of a shape"
              },
              {
                "name": "fill",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=fill'>Fill</a>",
                "default": "new Fill()",
                "required": "Optional",
                "description": "This will control the fill color and style"
              },
              {
                "name": "font",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=font'>Font</a>",
                "default": "new Font()",
                "required": "Optional",
                "description": "This will control the font color and style"
              },
              {
                "name": "data",
                "type": "any",
                "default": "",
                "required": "Optional",
                "description": "Still thinking this one through, maybe just use to store data?"
              },
              {
                "name": "type",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "This will control the what shape is drawn on the canvas"
              },
              {
                "name": "name",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "You can use this to give names to your shapes"
              },
              {
                "name": "stroke",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=stroke'>Stroke</a>",
                "default": "new Stroke()",
                "required": "Optional",
                "description": "This will control the stroke/line color and style"
              },
              {
                "name": "hidden",
                "type": "Boolean",
                "default": "false",
                "required": "Optional",
                "description": "This will control the visibility of a shape"
              },
              {
                "name": "position",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=position'>Position</a>",
                "default": "new Position()",
                "required": "Optional",
                "description": "This will provide all coordinates and sizing of a shape"
              },
              {
                "name": "conditions",
                "type": "any[]",
                "default": "[]",
                "required": "Optional",
                "description": "Still thinking this one through..."
              }
            ],
            "outputs": [
              {
                "name": "apply",
                "type": "Function",
                "description": "Adds the shape to the canvas, can only be called once per shape"
              },
              {
                "name": "update",
                "type": "Function",
                "description": "Modifies a shapes attributes and styles based on values supplied"
              },
              {
                "name": "remove",
                "type": "Function",
                "description": "Removes the shape from the canvas, can only be called once per shape"
              }
            ],
            "folder": "shapes"
          },
          {
            "title": "Table",
            "usage": "import { Table } from '@ngx-canvas/core';\n\nconst shape = new Table();",
            "description": "This will add a table to the canvas",
            "inputs": [
              {
                "name": "id",
                "type": "String",
                "default": "ObjectId()",
                "required": "Optional",
                "description": "This is the unique identifier of a shape"
              },
              {
                "name": "rows",
                "type": "Row[]",
                "default": "[]",
                "required": "optional",
                "description": ""
              },
              {
                "name": "fill",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=fill'>Fill</a>",
                "default": "new Fill()",
                "required": "Optional",
                "description": "This will control the fill color and style"
              },
              {
                "name": "font",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=font'>Font</a>",
                "default": "new Font()",
                "required": "Optional",
                "description": "This will control the font color and style"
              },
              {
                "name": "data",
                "type": "any",
                "default": "",
                "required": "Optional",
                "description": "Still thinking this one through, maybe just use to store data?"
              },
              {
                "name": "type",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "This will control the what shape is drawn on the canvas"
              },
              {
                "name": "name",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "You can use this to give names to your shapes"
              },
              {
                "name": "header",
                "type": "Row",
                "default": "new Row()",
                "required": "optional",
                "description": ""
              },
              {
                "name": "footer",
                "type": "Row[]",
                "default": "new Row()",
                "required": "optional",
                "description": ""
              },
              {
                "name": "stroke",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=stroke'>Stroke</a>",
                "default": "new Stroke()",
                "required": "Optional",
                "description": "This will control the stroke/line color and style"
              },
              {
                "name": "hidden",
                "type": "Boolean",
                "default": "false",
                "required": "Optional",
                "description": "This will control the visibility of a shape"
              },
              {
                "name": "position",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=position'>Position</a>",
                "default": "new Position()",
                "required": "Optional",
                "description": "This will provide all coordinates and sizing of a shape"
              },
              {
                "name": "conditions",
                "type": "any[]",
                "default": "[]",
                "required": "Optional",
                "description": "Still thinking this one through..."
              }
            ],
            "outputs": [
              {
                "name": "apply",
                "type": "Function",
                "description": "Adds the shape to the canvas, can only be called once per shape"
              },
              {
                "name": "update",
                "type": "Function",
                "description": "Modifies a shapes attributes and styles based on values supplied"
              },
              {
                "name": "remove",
                "type": "Function",
                "description": "Removes the shape from the canvas, can only be called once per shape"
              }
            ],
            "folder": "shapes"
          },
          {
            "title": "Text",
            "usage": "import { Text } from '@ngx-canvas/core';\n\nconst shape = new Text();",
            "description": "This will add a text to the canvas",
            "inputs": [
              {
                "name": "id",
                "type": "String",
                "default": "ObjectId()",
                "required": "Optional",
                "description": "This is the unique identifier of a shape"
              },
              {
                "name": "fill",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=fill'>Fill</a>",
                "default": "new Fill()",
                "required": "Optional",
                "description": "This will control the fill color and style"
              },
              {
                "name": "font",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=font'>Font</a>",
                "default": "new Font()",
                "required": "Optional",
                "description": "This will control the font color and style"
              },
              {
                "name": "data",
                "type": "any",
                "default": "",
                "required": "Optional",
                "description": "Still thinking this one through, maybe just use to store data?"
              },
              {
                "name": "type",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "This will control the what shape is drawn on the canvas"
              },
              {
                "name": "name",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "You can use this to give names to your shapes"
              },
              {
                "name": "value",
                "type": "String",
                "default": "''",
                "required": "optional",
                "description": ""
              },
              {
                "name": "stroke",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=stroke'>Stroke</a>",
                "default": "new Stroke()",
                "required": "Optional",
                "description": "This will control the stroke/line color and style"
              },
              {
                "name": "hidden",
                "type": "Boolean",
                "default": "false",
                "required": "Optional",
                "description": "This will control the visibility of a shape"
              },
              {
                "name": "position",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=position'>Position</a>",
                "default": "new Position()",
                "required": "Optional",
                "description": "This will provide all coordinates and sizing of a shape"
              },
              {
                "name": "conditions",
                "type": "any[]",
                "default": "[]",
                "required": "Optional",
                "description": "Still thinking this one through..."
              }
            ],
            "outputs": [
              {
                "name": "apply",
                "type": "Function",
                "description": "Adds the shape to the canvas, can only be called once per shape"
              },
              {
                "name": "update",
                "type": "Function",
                "description": "Modifies a shapes attributes and styles based on values supplied"
              },
              {
                "name": "remove",
                "type": "Function",
                "description": "Removes the shape from the canvas, can only be called once per shape"
              }
            ],
            "folder": "shapes"
          },
          {
            "title": "Vector",
            "usage": "import { Vector } from '@ngx-canvas/core';\n\nconst shape = new Vector();",
            "description": "This will add a vector to the canvas",
            "inputs": [
              {
                "name": "id",
                "type": "String",
                "default": "ObjectId()",
                "required": "Optional",
                "description": "This is the unique identifier of a shape"
              },
              {
                "name": "src",
                "type": "String",
                "default": "null",
                "required": "required",
                "description": ""
              },
              {
                "name": "fill",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=fill'>Fill</a>",
                "default": "new Fill()",
                "required": "Optional",
                "description": "This will control the fill color and style"
              },
              {
                "name": "font",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=font'>Font</a>",
                "default": "new Font()",
                "required": "Optional",
                "description": "This will control the font color and style"
              },
              {
                "name": "data",
                "type": "any",
                "default": "",
                "required": "Optional",
                "description": "Still thinking this one through, maybe just use to store data?"
              },
              {
                "name": "type",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "This will control the what shape is drawn on the canvas"
              },
              {
                "name": "name",
                "type": "String",
                "default": "",
                "required": "Optional",
                "description": "You can use this to give names to your shapes"
              },
              {
                "name": "stroke",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=stroke'>Stroke</a>",
                "default": "new Stroke()",
                "required": "Optional",
                "description": "This will control the stroke/line color and style"
              },
              {
                "name": "hidden",
                "type": "Boolean",
                "default": "false",
                "required": "Optional",
                "description": "This will control the visibility of a shape"
              },
              {
                "name": "position",
                "type": "<a href='REPLACE_WITH_HOST/docs/?module=core&section=utilities&subsection=position'>Position</a>",
                "default": "new Position()",
                "required": "Optional",
                "description": "This will provide all coordinates and sizing of a shape"
              },
              {
                "name": "conditions",
                "type": "any[]",
                "default": "[]",
                "required": "Optional",
                "description": "Still thinking this one through..."
              }
            ],
            "outputs": [
              {
                "name": "apply",
                "type": "Function",
                "description": "Adds the shape to the canvas, can only be called once per shape"
              },
              {
                "name": "update",
                "type": "Function",
                "description": "Modifies a shapes attributes and styles based on values supplied"
              },
              {
                "name": "remove",
                "type": "Function",
                "description": "Removes the shape from the canvas, can only be called once per shape"
              }
            ],
            "folder": "shapes"
          }
        ]
      },
      {
        "name": "Utilities",
        "subfolder": true,
        "items": [
          {
            "title": "Color",
            "usage": "import { Color } from '@ngx-canvas/core';\n\nconst shape = new Color();",
            "folder": "utilities",
            "description": "This will add a color to the canvas",
            "inputs": [],
            "outputs": []
          },
          {
            "title": "Fill",
            "usage": "import { Fill } from '@ngx-canvas/core';\n\nconst shape = new Fill();",
            "folder": "utilities",
            "description": "This will add a fill to the canvas",
            "inputs": [],
            "outputs": []
          },
          {
            "title": "Font",
            "usage": "import { Font } from '@ngx-canvas/core';\n\nconst shape = new Font();",
            "folder": "utilities",
            "description": "This will add a font to the canvas",
            "inputs": [],
            "outputs": []
          },
          {
            "title": "Gradient",
            "usage": "import { Gradient } from '@ngx-canvas/core';\n\nconst shape = new Gradient();",
            "folder": "utilities",
            "description": "This will add a gradient to the canvas",
            "inputs": [],
            "outputs": []
          },
          {
            "title": "Object ID",
            "usage": "import { ObjectId } from '@ngx-canvas/core';\n\nconst shape = new ObjectId();",
            "folder": "utilities",
            "description": "This will add a object id to the canvas",
            "inputs": [],
            "outputs": []
          },
          {
            "title": "Point",
            "usage": "import { Point } from '@ngx-canvas/core';\n\nconst shape = new Point();",
            "folder": "utilities",
            "description": "This will add a point to the canvas",
            "inputs": [],
            "outputs": []
          },
          {
            "title": "Position",
            "usage": "import { Position } from '@ngx-canvas/core';\n\nconst shape = new Position();",
            "folder": "utilities",
            "description": "This will add a position to the canvas",
            "inputs": [],
            "outputs": []
          },
          {
            "title": "Stroke",
            "usage": "import { Stroke } from '@ngx-canvas/core';\n\nconst shape = new Stroke();",
            "folder": "utilities",
            "description": "This will add a stroke to the canvas",
            "inputs": [],
            "outputs": []
          },
          {
            "title": "Style",
            "usage": "import { Style } from '@ngx-canvas/core';\n\nconst shape = new Style();",
            "folder": "utilities",
            "description": "This will add a style to the canvas",
            "inputs": [],
            "outputs": []
          }
        ]
      }
    ]
  },
  {
    "project": "draw",
    "folders": [
      {
        "name": "Draw",
        "subfolder": true,
        "description": "",
        "inputs": [
          {
            "name": "id",
            "type": "String",
            "default": "NA",
            "required": "required",
            "description": "This is the id of the element you want to append the project"
          }
        ],
        "outputs": [],
        "items": []
      },
      {
        "name": "Tools",
        "subfolder": true,
        "items": [
          {
            "title": "Aligner",
            "usage": "import { AlignerTool } from '@ngx-canvas/draw';\n\nconst aligner = new AlignerTool();",
            "description": "This will initialise the aligner tool. This tool will arrange selected shapes about one anothers positions",
            "inputs": [],
            "outputs": [],
            "folder": "tools"
          },
          {
            "title": "Grid",
            "usage": "import { GridTool } from '@ngx-canvas/draw';\n\nconst grid = new GridTool();",
            "description": "This will initialise the grid tool. Enabling the grid will allow for more accurate drawing",
            "inputs": [],
            "outputs": [],
            "folder": "tools"
          },
          {
            "title": "Group",
            "usage": "import { GroupTool } from '@ngx-canvas/draw';\n\nconst group = new GroupTool();",
            "description": "This will initialise the group tool. This will allow users to merge and separate shapes",
            "inputs": [],
            "outputs": [],
            "folder": "tools"
          },
          {
            "title": "Momento",
            "usage": "import { MomentoTool } from '@ngx-canvas/draw';\n\nconst momento = new MomentoTool();",
            "description": "This will initialise the momento tool. This will track all changes while drawing and allow users to go back or jump forward to previous and future states",
            "inputs": [],
            "outputs": [],
            "folder": "tools"
          },
          {
            "title": "Ruler",
            "usage": "import { RulerTool } from '@ngx-canvas/draw';\n\nconst ruler = new RulerTool();",
            "description": "This will initialise the ruler tool. This will show a scale ruler about the XY axes. It will allow users to drop fixes and draw more accurately",
            "inputs": [],
            "outputs": [],
            "folder": "tools"
          },
          {
            "title": "Select",
            "usage": "import { SelectTool } from '@ngx-canvas/draw';\n\nconst select = new SelectTool();",
            "description": "This will initialise the select tool. This will allow users to select shapes on the canvas",
            "inputs": [],
            "outputs": [],
            "folder": "tools"
          },
          {
            "title": "Zoom",
            "usage": "import { ZoomTool } from '@ngx-canvas/draw';\n\nconst zoom = new ZoomTool();",
            "description": "This will initialise the zoom tool. This will allow users to scale the canvas",
            "inputs": [],
            "outputs": [],
            "folder": "tools"
          }
        ]
      }
    ]
  }
]