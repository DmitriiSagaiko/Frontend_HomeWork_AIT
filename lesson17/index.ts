interface IAirplane {
  numberOfEngines: number;
  isJet: boolean;
  maxHeight: number;
  capacity?: number;
}

const airplane1: IAirplane = {
  numberOfEngines: 2,
  isJet: true,
  maxHeight: 10000,
  capacity: 250,
};

const airplane2: IAirplane = {
    numberOfEngines: 4,
    isJet: false,
    maxHeight: 12000,
  };

  console.log(airplane1, airplane2);
