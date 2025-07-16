import React from "react";

interface PropertyPanelProps {
  selectedItem: any;
  onChange: (props: any) => void;
}

const PropertyPanel: React.FC<PropertyPanelProps> = ({
  selectedItem,
  onChange,
}) => {
  if (!selectedItem) return null;

  const isShape = !!selectedItem.tool;
  const isText = selectedItem.text !== undefined;

  return (
    <div
      style={{
        position: "absolute",
        right: 20,
        top: 70,
        background: "#fff",
        padding: 10,
        border: "1px solid #ccc",
        borderRadius: 5,
        boxShadow: "0 0 5px rgba(0,0,0,0.1)",
      }}
    >
      <h4>Propriedades</h4>

      <label>
        Cor:
        <input
          type="color"
          value={selectedItem.fill || "#000000"}
          onChange={(e) => onChange({ fill: e.target.value })}
        />
      </label>

      {isShape && (
        <>
          <br />
          <label>
            Opacidade:
            <input
              type="range"
              min={0.1}
              max={1}
              step={0.1}
              value={selectedItem.opacity || 1}
              onChange={(e) =>
                onChange({ opacity: parseFloat(e.target.value) })
              }
            />
          </label>
          <br />
          <label>
            Largura:
            <input
              type="number"
              value={selectedItem.width || 0}
              onChange={(e) => onChange({ width: parseInt(e.target.value) })}
            />
          </label>
          <br />
          <label>
            Altura:
            <input
              type="number"
              value={selectedItem.height || 0}
              onChange={(e) => onChange({ height: parseInt(e.target.value) })}
            />
          </label>
        </>
      )}

      {isText && (
        <>
          <br />
          <label>
            Texto:
            <input
              type="text"
              value={selectedItem.text}
              onChange={(e) => onChange({ text: e.target.value })}
            />
          </label>
          <br />
          <label>
            Tamanho da fonte:
            <input
              type="number"
              value={selectedItem.fontSize || 20}
              onChange={(e) => onChange({ fontSize: parseInt(e.target.value) })}
            />
          </label>
        </>
      )}
    </div>
  );
};

export default PropertyPanel;
