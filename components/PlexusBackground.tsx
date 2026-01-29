import { FC, useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

const PlexusBackground: FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="plexus-bg"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#5c80e9",
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800, // ✔ correct key (NOT value_area)
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#4da6ff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "60%",   // right-side plexus
        height: "100%",
        zIndex: 0,
        pointerEvents: "none", // ✔ important: text / buttons clickable
      }}
    />
  );
};

export default PlexusBackground;
