import unittest
import taxCal

class TestTax(unittest.TestCase):
    def test_taxCal(self):
        result = taxCal.taxCal(1)
        self.assertEqual(result,0.15)
        result = taxCal.taxCal(2)
        self.assertEqual(result,0.30)
        result = taxCal.taxCal(50000)
        self.assertEqual(result,7630.35)
        result = taxCal.taxCal(100000)
        self.assertEqual(result,18141.105)
        result = taxCal.taxCal(150000)
        self.assertEqual(result,31211.095)
        result = taxCal.taxCal(250000)
        self.assertEqual(result,61796.255)


#to use the python command
if __name__ == '__name__':
    unittest.main()

#to run it: python -m unittest test_taxCal.py
