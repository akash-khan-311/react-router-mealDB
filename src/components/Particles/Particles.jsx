import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";

import { loadSlim } from "tsparticles-slim";
import ParticlesConfig from "../../utilites/Particles.Config";

const ParticlesStyle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticlesConfig}
      />
    </div>
  );
};

export default ParticlesStyle;
