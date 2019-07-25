import unittest
import email

class TestEmail(unittest.TestCase):
    def test_email(self):
        result = email.email('jingnan', 'zhang')
        self.assertEqual(result,'jingnan.zhang@evolveU.ca')

#to use the python command
if __name__ == '__name__':
    unittest.main()
