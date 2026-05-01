import React from 'react';

const ColorDemo = () => {
  return (
    <div>
      {/* Method 1: Inline styles with hex, rgb, named colors */}
      <div style={{ backgroundColor: '#FF5733', color: 'white', padding: '20px', margin: '10px' }}>
        Inline Hex: #FF5733 (Orange-Red)
      </div>
      
      <div style={{ backgroundColor: 'rgb(0, 255, 0)', color: 'black', padding: '20px', margin: '10px' }}>
        Inline RGB: rgb(0, 255, 0) (Green)
      </div>
      
      <div style={{ backgroundColor: 'hsl(240, 100%, 50%)', color: 'white', padding: '20px', margin: '10px' }}>
        Inline HSL: hsl(240, 100%, 50%) (Blue)
      </div>
      
      <div style={{ backgroundColor: 'rebeccapurple', color: 'white', padding: '20px', margin: '10px' }}>
        Inline Named: rebeccapurple
      </div>

      {/* Method 2: Tailwind classes (already in your project) */}
      <div className="bg-blue-500 text-white p-4 m-2 rounded">
        Tailwind: bg-blue-500
      </div>
      
      <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white p-4 m-2 rounded">
        Tailwind Gradient
      </div>

      {/* Method 3: CSS classes from external file */}
      <div className="my-custom-red">Custom CSS Class</div>

      {/* Method 4: CSS Variables */}
      <div className="css-var-demo">CSS Var: var(--my-color)</div>

      {/* Method 5: Conditional/Dynamic colors */}
      <div style={{ backgroundColor: true ? '#00FF00' : '#FF0000', padding: '20px', margin: '10px' }}>
        Dynamic: Green (condition true)
      </div>
    </div>
  );
};

export default ColorDemo;
</xai:function_call}


<xai:function_call name="create_file">
<parameter name="absolute_path">e:/forntenddata/project/Royal-Stay/color-demo.css
