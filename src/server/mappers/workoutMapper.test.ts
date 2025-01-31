import {
  mockCycle,
  mockWalk,
  mockWorkoutDetail,
} from "@/common/__mocks__/mockWorkoutDetail";
import {
  mockPelotonWorkoutByIdResponse,
  mockPelotonWalk,
  mockPelotonCycle,
} from "@/server/__mocks__/mockPelotonWorkoutByIdResponse";
import { workoutMapper, cycleMapper, walkMapper } from "./workoutMapper";

test("that we can map a PelotonWorkoutByIdResponse to WorkoutDetail", () => {
  const pelotonWorkoutByIdResponse = mockPelotonWorkoutByIdResponse;
  const result = workoutMapper(pelotonWorkoutByIdResponse);

  expect(result).toEqual(mockWorkoutDetail);
});

test("that we can map a PelotonWalk to a Walk", () => {
  const pelotonWalk = mockPelotonWalk;
  const result = walkMapper(pelotonWalk);

  expect(result).toEqual(mockWalk);
});

test("that we can map a PelotonCycle to a Cycle", () => {
  const pelotonCycle = mockPelotonCycle;
  const result = cycleMapper(pelotonCycle);
  expect(result).toEqual(mockCycle);
});
