#version 450

#include "lighting/tonemapping.glsl"
#include "math.glsl"

layout(location = 0) in vec2 tex_coords;

layout(location = 0) out vec4 color;

layout(set = 0, binding = 0) uniform sampler linear_sampler;
layout(set = 1, binding = 0) uniform texture2D source;

void main() {
    vec4 input_color = texture(sampler2D(source, linear_sampler), tex_coords);
    vec4 tonemapped = vec4(uncharted2_filmic(input_color.rgb), input_color.a);
    color = linear_to_srgb(tonemapped);
}