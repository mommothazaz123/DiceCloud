import { parse, stringify } from 'css-box-shadow';

// Only supports border radius defined like "20px" or "100%"
const transformedRadius = (radiusString, deltaWidth, deltaHeight) => {
	if (/^\d+\.?\d*px$/.test(radiusString)){
		//The radius is defined in pixel units, so get the radius as a number
		const rad = +radiusString.match(/\d+\.?\d*/)[0];
		// Set the x and y radius of the "to" element, compensating for scale
		return `${rad / deltaWidth}px / ${rad / deltaHeight}px`;
	} else if (/^\d+\.?\d*%$/.test(radiusString)) {
		//The radius is defined as a percentage, so just use it as is
		return radiusString;
	}
};

const transformedBoxShadow = (shadowString, deltaWidth, deltaHeight) => {
	if (shadowString[0] === 'r'){
		let strings = shadowString.match(/rgba\([^)]+\)[^,]+/g);
		strings = strings.map(string => {
			// TODO move color to end
			strings.match(/(rgba\([^)]+\))([^,]+)/)
		});
	}
	let scaleAverage = (deltaWidth + deltaHeight) / 2;
	let shadows = parse(shadowString);
	console.log({shadowString, shadows});
	shadows.forEach(shadow => {
		shadow.offsetX /= deltaWidth;
		shadow.offsetY /= deltaHeight;
		shadow.blurRadius /= scaleAverage;
		shadow.spreadRadius /= scaleAverage;
	})
	console.log({newShadows: shadows});
	return stringify(shadows);
}

export default function mockElement({source, target, offset = {x: 0, y: 0}}){
  if (!source || !target) throw `Can't mock without ${source ? 'target' : 'source'}` ;
  sourceRect = source.getBoundingClientRect();
  targetRect = target.getBoundingClientRect();

  // Get how must the target change to become the source
  const deltaWidth = sourceRect.width / targetRect.width;
  const deltaHeight = sourceRect.height / targetRect.height;
  const deltaLeft = sourceRect.left - targetRect.left + offset.x;
  const deltaTop = sourceRect.top - targetRect.top + offset.y;
  // Mock the source
  target.style.transform = `translate(${deltaLeft}px, ${deltaTop}px) ` +
		`scale(${deltaWidth}, ${deltaHeight})`;

	target.style.background = getComputedStyle(source).background;
	target.style.borderRadius = transformedRadius(
    getComputedStyle(source).borderRadius, deltaWidth, deltaHeight
  );
	//target.style.boxShadow = transformedBoxShadow(
	//	getComputedStyle(source).boxShadow, deltaWidth, deltaHeight
	//);
};